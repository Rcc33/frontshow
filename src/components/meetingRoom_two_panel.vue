<template>
  <div class="node" id="meetingroom_two_mountNode" />
</template>

<script>
import G6 from "@antv/g6";
export default {
  name: "MeetingRoomTwoPanel",
  data() {
    return {
      height: window.innerHeight,
      width: window.innerWidth / 4 * 3,
      panelHeight: window.innerHeight,
      panelWidth: window.innerHeight / 717 * 1389,
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
        container: "meetingroom_two_mountNode",
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
          }
        },
        modes: ["drag-canvas", "zoom-canvas"]
      });
      this.graph.data(this.basicData);
      this.graph.render();
    },
    addNodes() {
      const that = this;
      const meetingRoom_two_label = {
        id: "meetingRoom_two_label",
        x: this.panelWidth / 100 * 50,
        y: this.panelHeight / 100 * 13,
        type: "ellipse",
        size: [this.panelWidth / 100 * 15, this.panelHeight / 100 * 4],
        label: "会议室二",
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const door_2 = {
        id: "door_2",
        x: this.panelWidth / 100 * 82.5,
        y: this.panelHeight / 100 * 5,
        size: [this.panelWidth / 100 * 13, this.panelHeight / 100 * 8],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const air_conditioner_2 = {
        id: "meetingroom02_ac001",
        x: this.panelWidth / 100 * 21.5,
        y: this.panelHeight / 100 * 89.5,
        size: [this.panelWidth / 100 * 14.5, this.panelHeight / 100 * 7.5],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const TV_2 = {
        id: "TV_2",
        x: this.panelWidth / 100 * 90,
        y: this.panelHeight / 100 * 53.5,
        size: [this.panelWidth / 100 * 7.5, this.panelHeight / 100 * 50],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const window_3 = {
        id: "window_3",
        x: this.panelWidth / 100 * 2,
        y: this.panelHeight / 100 * 54.3,
        size: [this.panelWidth / 100 * 3.3, this.panelHeight / 100 * 39],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      this.basicData.nodes.push(door_2);
      this.basicData.nodes.push(air_conditioner_2);
      this.basicData.nodes.push(TV_2);
      this.basicData.nodes.push(window_3);
      this.basicData.nodes.push(meetingRoom_two_label);
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
      if (this.height / this.width < 717 / 1389) {
        this.panelHeight = this.height;
        this.panelWidth = this.height / 717 * 1389;
      } else {
        this.panelHeight = this.width / 1389 * 717;
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
