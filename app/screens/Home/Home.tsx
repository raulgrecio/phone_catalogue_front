import React, {useEffect} from 'react';
import {Text, FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {SIZES} from 'app/config/styles';
import locale from 'app/constants/es';
import {PhoneResponse} from 'app/models/api/phone';
import {IPhonesState} from 'app/models/reducers/phone';
import * as phoneActions from 'app/store/actions/phoneActions';

import Phone from './components/Phone';
import LoadButton from './components/LoadButton';

const T = locale.home;
const styles = StyleSheet.create({
  list: {
    paddingBottom: 30,
    justifyContent: 'flex-start',
  },
  header: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    //backgroundColor: 'red',
  },
  title: {
    fontSize: SIZES.body1,
    fontWeight: '300',
  },
  footer: {
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

const List = () => {
  const dispatch = useDispatch();
  const onLoad = (page: number) => dispatch(phoneActions.onPhoneRequest(page));
  const phoneReducer = useSelector(
    // @ts-ignore: Unreachable code error
    (state) => state.phoneReducer,
  );
  const data = (phoneReducer as IPhonesState<PhoneResponse>) || null;
  const items = data?.results?.length || 0;

  const loadMore = async () => {
    if (!data.hasMore) {
      return;
    }

    onLoad(data.page + 1);
  };

  useEffect(
    () => {
      onLoad(1);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  // console.log(`
  //   hasMore:${data?.hasMore},
  //   totalResults:${data?.totalResults},
  //   page:${data?.page},
  //   totalPages:${data?.totalPages},
  //   isFetching:${data?.isFetching}
  // `);

  return (
    <>
      {data?.totalResults != null && data?.totalResults > 0 && (
        <View style={styles.header}>
          <Text style={styles.title}>
            {T.displaying} {items}{' '}
            {T.items
              .toLowerCase()
              .substring(0, T.items.length - (items === 1 ? 1 : 0))}
          </Text>
        </View>
      )}

      <FlatList
        contentContainerStyle={styles.list}
        ListFooterComponent={
          <View style={styles.footer}>
            {data.hasMore && (
              <LoadButton
                onPress={() => loadMore()}
                isFetching={data.isFetching}
              />
            )}
          </View>
        }
        scrollEventThrottle={250}
        // onEndReached={() => {
        //   loadMore();
        // }}
        //onEndReachedThreshold={0.01}
        data={data.results}
        keyExtractor={(item, index) =>
          `item_${item._id}_${index}_${Date.now()}`
        }
        renderItem={Phone}
      />
    </>
  );
};

export default List;
