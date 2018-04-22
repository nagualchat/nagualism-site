import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

import SearchPage from "@/pages/SearchPage"
import LibraryPage from "@/pages/LibraryPage"
import ReaderPage from "@/pages/ReaderPage"
import ListPage from "@/pages/ListPage"
import ListInfo from "@/pages/ListInfo"

export default new Router({
  mode: "history",
  linkActiveClass: "is-active",
  routes: [
    {
      path: "/",
      redirect: "/search",
    },
    {
      path: "/search",
      component: SearchPage
    },
    {
      path: "/lib",
      component: LibraryPage
    },
    {
      path: "/list",
      component: ListPage
    },
    {
      path: "/list-info",
      component: ListInfo
    },
    {
      path: "/:reader",
      component: ReaderPage
    },
  ]
})