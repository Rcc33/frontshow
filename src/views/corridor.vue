<template>
  <div class="container">
    <grid-layout
      class="grid"
      :layout.sync="layout"
      :max-rows="maxRows"
      :cols="cols"
      :margin="margin"
      :col-num="colNum"
      :row-height="rowHeight"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :vertical-compact="true"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
        drag-allow-from=".vue-draggable-handle"
        drag-ignore-from=".no-drag"
        @moved="movedEvent"
        @moveEvent="moveEvent"
      >
        <div class="center-container" v-if="item.i == 0">
          <div class="vue-draggable-handle"></div>
          <div :class="changeCss ? 'corridor-container-Width' : 'corridor-container-Height'">
            <div class="no-drag">
              <CorridorPanel class="panel"></CorridorPanel>
            </div>
          </div>
        </div>
        <div class="information-container" v-if="item.i == 1">
          <el-tabs v-model="choose_tab" type="card" :stretch="true">
            <el-tab-pane label="基本信息" name="information_specific">
              <div :is="'information_specific'" keep-alive :id="id"></div>
            </el-tab-pane>
            <el-tab-pane label="环境事件" name="information_dynamic">
              <div :is="'information_dynamic'" keep-alive :id="id"></div>
            </el-tab-pane>
          </el-tabs>
          <div class="vue-draggable-handle vue-draggable-handle-panel"></div>
        </div>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';
import CorridorPanel from '@/components/corridor_panel.vue';
import information_specific from "./information_specific.vue";
import information_dynamic from "./information_dynamic.vue";
export default {
  name: 'Corridor',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    CorridorPanel,
    information_specific,
    information_dynamic,
  },
  data() {
    return {
      choose_tab: "information_specific",
      id: "",
      type: "",
      Properties: "",
      State: "",
      height: window.innerHeight,
      width: window.innerWidth / 4 * 3,
      panelHeight: window.innerHeight,
      panelWidth: window.innerHeight / 926 * 2579,
      changeCss: false,
      layout: [
        { "x": 0, "y": 0, "w": 3, "h": 20, "i": "0" },
        { "x": 3, "y": 0, "w": 1, "h": 20, "i": "1" },
      ],
      draggable: true,
      resizable: false,
      colNum: 4,
      maxRows: 1,
      rowHeight: window.innerHeight / 20,
      cols: { lg: 4, md: 4, sm: 4, xs: 4, xxs: 4 },
      margin: [5, 0],
      index: 0
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.height / this.width < 926 / 2579) {
        this.changeCss = false;
        this.panelHeight = this.height;
        this.panelWidth = this.height / 926 * 2579;
      } else {
        this.changeCss = true;
        this.panelHeight = this.width / 2579 * 926;
        this.panelWidth = this.width;
      }
    },
    movedEvent: function (i, newX, newY) {
      const msg = "MOVED i=" + i + ", X=" + newX + ", Y=" + newY;
      console.log(msg);
      var temp_layout = [];
      if (this.layout[0].x < this.layout[1].x) {
        if ((i == 0 && newX == 0) || (i == 1 && newX == 3)) {
          temp_layout = [{ "x": 0, "y": 0, "w": 3, "h": 20, "i": "0" }, { "x": 3, "y": 0, "w": 1, "h": 20, "i": "1" }]
        } else if ((i == 0 && newX > 0) || (i == 1 && newX < 3)) {
          temp_layout = [{ "x": 1, "y": 0, "w": 3, "h": 20, "i": "0" }, { "x": 0, "y": 0, "w": 1, "h": 20, "i": "1" }]
        }
      } else {
        if ((i == 0 && newX == 0) || (i == 1 && newX > 0)) {
          temp_layout = [{ "x": 0, "y": 0, "w": 3, "h": 20, "i": "0" }, { "x": 3, "y": 0, "w": 1, "h": 20, "i": "1" }]
        } else if ((i == 0 && newX == 1) || (i == 1 && newX == 0)) {
          temp_layout = [{ "x": 1, "y": 0, "w": 3, "h": 20, "i": "0" }, { "x": 0, "y": 0, "w": 1, "h": 20, "i": "1" }]
        }
      }
      this.layout = temp_layout;
    },
    moveEvent: function (i, newX, newY) {
      const msg = "MOVED i=" + i + ", X=" + newX + ", Y=" + newY;
      console.log(msg);
    }
  },
}
</script>

<style>
.corridor-container-Height {
  position: absolute;
  width: calc(100vh / 926 * 2579);
  height: 100vh;
  background: url("../static/image/corridor.jpg") no-repeat center center;
  background-size: contain;
}

.corridor-container-Width {
  position: absolute;
  width: 75vw;
  height: calc(75vw / 2579 * 926);
  background: url("../static/image/corridor.jpg") no-repeat center center;
  background-size: contain;
}
</style>
