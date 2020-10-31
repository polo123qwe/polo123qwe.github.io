import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: { 
        dark: true,
        themes: {
            dark: {
                primary: colors.blueGrey.base,
                secondary: colors.blueGrey.darken1,
                accent: colors.deepOrange.base,
                error: colors.red.base,
                warning: colors.amber.base,
                info: colors.blue.base,
                success: colors.green.base
            }
        }
     },
});