<template>
  <div>
    <sidebar-menu :menu="menu">
    <span slot="toggle-icon"><i class="fas fa-arrows-alt-h"></i></span>
    <span slot="dropdown-icon"><i class="fas fa-caret-right"></i></span>
</sidebar-menu>
  </div>
</template>

<script >


import { SidebarMenu } from 'vue-sidebar-menu'
 export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/charts',
                        title: 'Charts',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    }
              ],

              theme: {
                type: String,
                default: ''
              },
            }
        }
    }
</script>


<style scoped>

.v-sidebar-menu .vsm-arrow:after {
    content: '\f105';
    font-family: 'Font Awesome 5 Free';
}

.v-sidebar-menu .collapse-btn:after {
    content: '\f337';
    font-family: 'Font Awesome 5 Free';
}

</style>