import Vue from "vue"
import VueRouter from "vue-router"
import MeetingRoomOne from "../views/meetingRoom_one.vue"
import MeetingRoomTwo from "../views/meetingRoom_two.vue"
import Office from "../views/office.vue"
import TeaRoom from "../views/teaRoom.vue"
import Corridor from "../views/corridor.vue"
import FirstVue from "../views/firstVue.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/meetingroom_one",
    name: "MeetingRoomOne",
    component: MeetingRoomOne,
  },
  {
    path: "/meetingroom_two",
    name: "MeetingRoomTwo",
    component: MeetingRoomTwo,
  },
  {
    path: "/office",
    name: "office",
    component: Office,
  },
  {
    path: "/tearoom",
    name: "tearoom",
    component: TeaRoom,
  },
  {
    path: "/corridor",
    name: "corridor",
    component: Corridor,
  },
  {
    path: "/",
    name: "FirstVue",
    component: FirstVue,
  },
  {
    path: "*",
    name: "FirstVue",
    component: FirstVue,
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
