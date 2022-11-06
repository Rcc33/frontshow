<template>
  <div class="node" id="meetingroom_one_mountNode" />
</template>

<script>
import G6 from "@antv/g6";
export default {
  name: "MeetingRoomOnePanel",
  data() {
    return {
      height: window.innerHeight,
      width: window.innerWidth / 4 * 3,
      panelHeight: window.innerHeight,
      panelWidth: window.innerHeight / 926 * 1696,
      graph: null,
      basicData: {
        nodes: [],
      },
    }
  },
  mounted() {
    this.getData();
    this.initG6();
    this.addNodes();
  },
  methods: {
    initG6() {
      this.graph = new G6.Graph({
        container: "meetingroom_one_mountNode",
        autoPaint: true,
        width: this.panelWidth,
        height: this.panelHeight,
        defaultNode: {
          type: "rect",
          labelCfg: {
            position: "center",
            style: {
              fontSize: this.panelWidth / 40,
              fill: "red",
            },
          },
          style: {
            stroke: "red",
          },
        },
        modes: ["drag-canvas", "zoom-canvas"]
      });
      this.graph.data(this.basicData);
      this.graph.render();
    },
    addNodes() {
      const that = this;
      const meetingRoom_one_label = {
        id: "meetingRoom_one_label",
        x: this.panelWidth / 100 * 50,
        y: this.panelHeight / 100 * 12,
        type: "ellipse",
        size: [this.panelWidth / 100 * 15, this.panelHeight / 100 * 4],
        label: "会议室一",
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const door_1 = {
        id: "door_1",
        x: this.panelWidth / 100 * 82.7,
        y: this.panelHeight / 100 * 97,
        size: [this.panelWidth / 100 * 12.8, this.panelHeight / 100 * 7],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const air_conditioner_3 = {
        id: "meetingroom01_ac001",
        x: this.panelWidth / 100 * 4.8,
        y: this.panelHeight / 100 * 57.8,
        size: [this.panelWidth / 100 * 4, this.panelHeight / 100 * 27],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const TV_1 = {
        id: "TV_1",
        x: this.panelWidth / 100 * 89,
        y: this.panelHeight / 100 * 50,
        size: [this.panelWidth / 100 * 8, this.panelHeight / 100 * 50],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const window_1 = {
        id: "window_1",
        x: this.panelWidth / 100 * 58.5,
        y: this.panelHeight / 100 * 3.5,
        size: [this.panelWidth / 100 * 22.5, this.panelHeight / 100 * 6.5],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      this.basicData.nodes.push(door_1);
      this.basicData.nodes.push(air_conditioner_3);
      this.basicData.nodes.push(TV_1);
      this.basicData.nodes.push(window_1);
      this.basicData.nodes.push(meetingRoom_one_label);
      this.graph.data(this.basicData);
      this.graph.on("node:click", (ev) => {
        const node_now = ev.item;
        const model_now = node_now.getModel();
        if (node_now.getModel().type == "rect" && node_now.getModel().id.indexOf("space") == -1) {
          if (that.$parent.$parent.$parent.id != node_now.getModel().id) {
            if (that.$parent.$parent.$parent.id != "") {
              const node_last = that.graph.findById(that.$parent.$parent.$parent.id);
              const model_last = node_last.getModel();
              model_last.style = {
                fillOpacity: 0,
                lineWidth: 0
              }
              that.graph.updateItem(node_last, model_last);
              that.graph.refreshItem(node_last);
            }
            model_now.style = {
              fillOpacity: 0,
              lineWidth: 2,
              stroke: "red",
            }
            that.graph.updateItem(node_now, model_now);
            that.graph.refreshItem(node_now);
            that.$parent.$parent.$parent.id = node_now.getModel().id;
          }
        }
      });
      this.graph.render();
    },
    getData() {
      if (this.height / this.width < 926 / 1696) {
        this.panelHeight = this.height;
        this.panelWidth = this.height / 926 * 1696;
      } else {
        this.panelHeight = this.width / 1696 * 926;
        this.panelWidth = this.width;
      }
    },
  }
}
</script>

<style>
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

.node {
  width: 100%;
  height: 100%;
}
</style>
