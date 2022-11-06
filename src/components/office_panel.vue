<template>
  <div class="node" id="office_mountNode" />
</template>

<script>
import G6 from "@antv/g6";
export default {
  name: "OfficePanel",
  data() {
    return {
      height: window.innerHeight,
      width: window.innerWidth / 4 * 3,
      panelHeight: window.innerHeight,
      panelWidth: window.innerHeight / 827 * 1126,
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
        container: "office_mountNode",
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
        },
        modes: ["drag-canvas", "zoom-canvas"]
      });
      this.graph.data(this.basicData);
      this.graph.render();
    },
    addNodes() {
      const that = this;
      const office_label = {
        id: "office_label",
        x: this.panelWidth / 100 * 50,
        y: this.panelHeight / 100 * 10,
        type: "ellipse",
        size: [this.panelWidth / 100 * 15, this.panelHeight / 100 * 4],
        label: "办公室",
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const door_3 = {
        id: "door_3",
        x: this.panelWidth / 100 * 21,
        y: this.panelHeight / 100 * 2,
        size: [this.panelWidth / 100 * 18.5, this.panelHeight / 100 * 4.5],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const printer = {
        id: "laboratory01_printer001",
        x: this.panelWidth / 100 * 94.5,
        y: this.panelHeight / 100 * 42,
        size: [this.panelWidth / 100 * 6, this.panelHeight / 100 * 8],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const air_conditioner_1 = {
        id: "laboratory01_ac001",
        x: this.panelWidth / 100 * 91,
        y: this.panelHeight / 100 * 10.5,
        size: [this.panelWidth / 100 * 8, this.panelHeight / 100 * 10],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const window_4 = {
        id: "window_4",
        x: this.panelWidth / 100 * 29,
        y: this.panelHeight / 100 * 97.5,
        size: [this.panelWidth / 100 * 22, this.panelHeight / 100 * 4],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const window_5 = {
        id: "window_5",
        x: this.panelWidth / 100 * 68.5,
        y: this.panelHeight / 100 * 97.5,
        size: [this.panelWidth / 100 * 21.5, this.panelHeight / 100 * 4],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      this.basicData.nodes.push(door_3);
      this.basicData.nodes.push(printer);
      this.basicData.nodes.push(air_conditioner_1);
      this.basicData.nodes.push(window_4);
      this.basicData.nodes.push(window_5);
      this.basicData.nodes.push(office_label);
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
      if (this.height / this.width < 827 / 1126) {
        this.panelHeight = this.height;
        this.panelWidth = this.height / 827 * 1126;
      } else {
        this.panelHeight = this.width / 1126 * 827;
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
