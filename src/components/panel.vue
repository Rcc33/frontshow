<template>
  <div class="node" id="mountNode" />
</template>

<script>
import G6 from "@antv/g6";
export default {
  name: "Panel",
  data() {
    return {
      node: null,
      height: window.innerHeight,
      width: window.innerWidth / 4 * 3,
      panelHeight: window.innerHeight,
      panelWidth: window.innerHeight / 926 * 1151,
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
        container: "mountNode",
        autoPaint: true,
        width: this.panelWidth,
        height: this.panelHeight,
        defaultNode: {
          type: "rect",
          labelCfg: {
            position: "center",
            style: {
              fontSize: this.panelWidth / 55,
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
      const meetingRoom_one_label = {
        id: "meetingRoom_one_label",
        x: this.panelWidth / 100 * 24,
        y: this.panelHeight / 100 * 4,
        type: "ellipse",
        size: [this.panelWidth / 100 * 15, this.panelHeight / 100 * 4],
        label: "会议室一",
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const meetingRoom_one_space = {
        id: "meetingRoom_one_space",
        x: this.panelWidth / 100 * 24,
        y: this.panelHeight / 100 * 14.5,
        size: [this.panelWidth / 100 * 40.5, this.panelHeight / 100 * 27],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const meetingRoom_two_label = {
        id: "meetingRoom_two_label",
        x: this.panelWidth / 100 * 24,
        y: this.panelHeight / 100 * 69,
        type: "ellipse",
        size: [this.panelWidth / 100 * 15, this.panelHeight / 100 * 4],
        label: "会议室二",
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const meetingRoom_two_space = {
        id: "meetingRoom_two_space",
        x: this.panelWidth / 100 * 24,
        y: this.panelHeight / 100 * 79,
        size: [this.panelWidth / 100 * 40.5, this.panelHeight / 100 * 25],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const office_label = {
        id: "office_label",
        x: this.panelWidth / 100 * 67,
        y: this.panelHeight / 100 * 60,
        type: "ellipse",
        size: [this.panelWidth / 100 * 15, this.panelHeight / 100 * 4],
        label: "办公室",
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const office_space = {
        id: "office_space",
        x: this.panelWidth / 100 * 68,
        y: this.panelHeight / 100 * 77,
        size: [this.panelWidth / 100 * 47, this.panelHeight / 100 * 43],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const teaRoom_label = {
        id: "teaRoom_label",
        x: this.panelWidth / 100 * 24,
        y: this.panelHeight / 100 * 39,
        type: "ellipse",
        size: [this.panelWidth / 100 * 15, this.panelHeight / 100 * 4],
        label: "茶水间",
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const teaRoom_space = {
        id: "teaRoom_space",
        x: this.panelWidth / 100 * 24,
        y: this.panelHeight / 100 * 47,
        size: [this.panelWidth / 100 * 40.5, this.panelHeight / 100 * 38],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const corridor_label = {
        id: "corridor_label",
        x: this.panelWidth / 100 * 67,
        y: this.panelHeight / 100 * 37,
        type: "ellipse",
        size: [this.panelWidth / 100 * 15, this.panelHeight / 100 * 4],
        label: "走廊",
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const corridor_space = {
        id: "corridor_space",
        x: this.panelWidth / 100 * 68,
        y: this.panelHeight / 100 * 44.5,
        size: [this.panelWidth / 100 * 47, this.panelHeight / 100 * 23],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      /*
      const door_1 = {
        id: "door_1",
        x: this.panelWidth / 100 * 37.5,
        y: this.panelHeight / 100 * 28,
        size: [this.panelWidth / 100 * 6, this.panelHeight / 100 * 3.5],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const door_2 = {
        id: "door_2",
        x: this.panelWidth / 100 * 37.5,
        y: this.panelHeight / 100 * 66.5,
        size: [this.panelWidth / 100 * 6, this.panelHeight / 100 * 3.5],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const door_3 = {
        id: "door_3",
        x: this.panelWidth / 100 * 53.5,
        y: this.panelHeight / 100 * 56,
        size: [this.panelWidth / 100 * 9, this.panelHeight / 100 * 3.5],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const door_4 = {
        id: "door_4",
        x: this.panelWidth / 100 * 91,
        y: this.panelHeight / 100 * 44.5,
        size: [this.panelWidth / 100 * 3, this.panelHeight / 100 * 18],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const air_conditioner_1 = {
        id: "air_conditioner_1",
        x: this.panelWidth / 100 * 87.5,
        y: this.panelHeight / 100 * 60,
        size: [this.panelWidth / 100 * 5, this.panelHeight / 100 * 5],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const air_conditioner_2 = {
        id: "air_conditioner_2",
        x: this.panelWidth / 100 * 12,
        y: this.panelHeight / 100 * 89.5,
        size: [this.panelWidth / 100 * 7, this.panelHeight / 100 * 3],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const air_conditioner_3 = {
        id: "air_conditioner_3",
        x: this.panelWidth / 100 * 5,
        y: this.panelHeight / 100 * 17,
        size: [this.panelWidth / 100 * 2.5, this.panelHeight / 100 * 8.5],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const air_conditioner_4 = {
        id: "air_conditioner_4",
        x: this.panelWidth / 100 * 5,
        y: this.panelHeight / 100 * 58.5,
        size: [this.panelWidth / 100 * 2.5, this.panelHeight / 100 * 8],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const printer = {
        id: "printer",
        x: this.panelWidth / 100 * 89.5,
        y: this.panelHeight / 100 * 74,
        size: [this.panelWidth / 100 * 4, this.panelHeight / 100 * 4.5],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const water = {
        id: "water",
        x: this.panelWidth / 100 * 32.5,
        y: this.panelHeight / 100 * 63.5,
        size: [this.panelWidth / 100 * 4, this.panelHeight / 100 * 5],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const coffee = {
        id: "coffee",
        x: this.panelWidth / 100 * 26.5,
        y: this.panelHeight / 100 * 64.5,
        size: [this.panelWidth / 100 * 4, this.panelHeight / 100 * 4],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const TV_1 = {
        id: "TV_1",
        x: this.panelWidth / 100 * 40,
        y: this.panelHeight / 100 * 15,
        size: [this.panelWidth / 100 * 3.5, this.panelHeight / 100 * 14.5],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const TV_2 = {
        id: "TV_2",
        x: this.panelWidth / 100 * 40,
        y: this.panelHeight / 100 * 80,
        size: [this.panelWidth / 100 * 3.5, this.panelHeight / 100 * 14.5],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const window_1 = {
        id: "window_1",
        x: this.panelWidth / 100 * 27.5,
        y: this.panelHeight / 100 * 1.5,
        size: [this.panelWidth / 100 * 10.5, this.panelHeight / 100 * 3],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const window_2 = {
        id: "window_2",
        x: this.panelWidth / 100 * 3.5,
        y: this.panelHeight / 100 * 45.5,
        size: [this.panelWidth / 100 * 2.5, this.panelHeight / 100 * 13.5],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const window_3 = {
        id: "window_3",
        x: this.panelWidth / 100 * 3.5,
        y: this.panelHeight / 100 * 80,
        size: [this.panelWidth / 100 * 2.5, this.panelHeight / 100 * 11.5],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const window_4 = {
        id: "window_4",
        x: this.panelWidth / 100 * 57.5,
        y: this.panelHeight / 100 * 98.5,
        size: [this.panelWidth / 100 * 11.5, this.panelHeight / 100 * 3],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      const window_5 = {
        id: "window_5",
        x: this.panelWidth / 100 * 76.5,
        y: this.panelHeight / 100 * 98.5,
        size: [this.panelWidth / 100 * 11.5, this.panelHeight / 100 * 3],
        style: {
          fillOpacity: 0,
          lineWidth: 0
        },
      };
      this.basicData.nodes.push(door_1);
      this.basicData.nodes.push(door_2);
      this.basicData.nodes.push(door_3);
      this.basicData.nodes.push(door_4);
      this.basicData.nodes.push(air_conditioner_1);
      this.basicData.nodes.push(air_conditioner_2);
      this.basicData.nodes.push(air_conditioner_3);
      this.basicData.nodes.push(air_conditioner_4);
      this.basicData.nodes.push(printer);
      this.basicData.nodes.push(water);
      this.basicData.nodes.push(coffee);
      this.basicData.nodes.push(TV_1);
      this.basicData.nodes.push(TV_2);
      this.basicData.nodes.push(window_1);
      this.basicData.nodes.push(window_2);
      this.basicData.nodes.push(window_3);
      this.basicData.nodes.push(window_4);
      this.basicData.nodes.push(window_5);
      */
      this.basicData.nodes.push(meetingRoom_one_label);
      this.basicData.nodes.push(meetingRoom_one_space);
      this.basicData.nodes.push(meetingRoom_two_label);
      this.basicData.nodes.push(meetingRoom_two_space);
      this.basicData.nodes.push(office_label);
      this.basicData.nodes.push(office_space);
      this.basicData.nodes.push(corridor_label);
      this.basicData.nodes.push(corridor_space);
      this.basicData.nodes.push(teaRoom_label);
      this.basicData.nodes.push(teaRoom_space);
      this.graph.data(this.basicData);
      this.graph.on("node:click", (ev) => {
        const node_now = ev.item;
        if (node_now.getModel().id == "meetingRoom_one_space") {
          that.$router.push({ path: "/meetingroom_one", params: { room_name: "meetingroom" } });
        } else if (node_now.getModel().id == "meetingRoom_two_space") {
          that.$router.push({ path: "/meetingroom_two", params: { room_name: "meetingroom" } });
        } else if (node_now.getModel().id == "office_space") {
          that.$router.push({ path: "/office", params: { room_name: "office" } });
        } else if (node_now.getModel().id == "corridor_space") {
          that.$router.push({ path: "/corridor", params: { room_name: "corridor" } });
        } else if (node_now.getModel().id == "teaRoom_space") {
          that.$router.push({ path: "/tearoom", params: { room_name: "tearoom" } });
        }
      });
      this.graph.render();
      this.graph.findById("meetingRoom_one_space").toBack();
      this.graph.findById("meetingRoom_two_space").toBack();
      this.graph.findById("office_space").toBack();
      this.graph.findById("corridor_space").toBack();
      this.graph.findById("teaRoom_space").toBack();
    },
    getData() {
      if (this.height / this.width < 926 / 1151) {
        this.panelHeight = this.height;
        this.panelWidth = this.height / 926 * 1151;
      } else {
        this.panelHeight = this.width / 1151 * 926;
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
