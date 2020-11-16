/*
 * Reducer actions related with navigation
 */
import NavigationService, {screenNames} from 'app/navigation/NavigationService';

export function navigateToHome(params?: any) {
  NavigationService.navigate(screenNames.home, params);
}

export function navigateToDetails(params?: any) {
  NavigationService.navigate(screenNames.phoneDetail, params);
}

export function navigateToSetting(params?: any) {
  NavigationService.navigate(screenNames.settings, params);
}
