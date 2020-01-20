import Vue from 'vue';
import SvgIcon from './SvgIcon';

Vue.component('svg-icon', SvgIcon);

const svgs = require.context('@/assets/icons', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(svgs);
export default svgs;