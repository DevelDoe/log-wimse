/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-07T14:06:43+01:00
 * @Email:  andreeray@live.com
 * @Filename: routes.js
 * @Last modified by:   andreeray
 * @Last modified time: 2018-02-01T12:49:24+01:00
 */



import App from '../App.vue'
import Detail from '../components/Detail.vue'

export default [
    {
        path: '/',
        component: App,
        name: 'home'
    },
    {
        path: '/post/:id',
        component: Detail,
        name: 'post'
    },
    {
        path: '*',
        redirect: { name: 'home' }
    }
]
