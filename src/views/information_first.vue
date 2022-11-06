<template>
  <div class="information-outer">
    <el-col>
      <el-row class="row">
        <el-card shadow="hover" name="MeetingRoom_one">
          <div class="MeetingRoom_one_container">
            <p class="name">会议室一</p>
            <div class="room-inner">
              <div class="room">
                <p class="first-infor">温度：{{meetingroom01_temperature}}</p>
                <p class="infor-MeetingRoom">人数：{{meetingroom01_count}}</p>
                <p class="infor-MeetingRoom">门窗状态：{{meetingroom01_door}}</p>
              </div>
            </div>
          </div>
        </el-card>
      </el-row>
      <el-row class="row">
        <el-card shadow="hover" name="MeetingRoom_two">
          <div class="MeetingRoom_two_container">
            <p class="name">会议室二</p>
            <div class="room-inner">
              <div class="room">
                <p class="first-infor">温度：{{meetingroom02_temperature}}</p>
                <p class="infor-MeetingRoom">人数：{{meetingroom02_count}}</p>
                <p class="infor-MeetingRoom">门窗状态：{{meetingroom02_door}}</p>
              </div>
            </div>
          </div>
        </el-card>
      </el-row>
      <el-row class="row">
        <el-card shadow="hover" name="TeaRoom">
          <div class="TeaRoom_container">
            <p class="name">茶水间</p>
            <div class="room-inner">
              <div class="room">
                <p class="first-infor">温度：{{tearoom_temperature}}</p>
                <p class="infor-TeaRoom">门窗状态：{{tearoom_door}}</p>
              </div>
            </div>
          </div>
        </el-card>
      </el-row>
      <el-row class="row">
        <el-card shadow="hover" name="Office">
          <div class="Office_container">
            <p class="name">办公室</p>
            <div class="room-inner">
              <div class="room">
                <p class="first-infor">温度：{{office_temperature}}</p>
                <p class="infor-Office">人数：{{office_count}}</p>
                <p class="infor-Office">门窗状态：{{office_door}}</p>
              </div>
            </div>
          </div>
        </el-card>
      </el-row>
      <el-row class="row">
        <el-card shadow="hover" name="Corridir">
          <div class="Corridor_container">
            <p class="name">走廊</p>
            <div class="room-inner">
              <div class="room">
                <p class="first-infor">温度：{{corridor_temperature}}</p>
                <p class="infor-Corridor">门窗状态：{{corridor_door}}</p>
              </div>
            </div>
          </div>
        </el-card>
      </el-row>
    </el-col>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "information_first",
  components: {},
  props: ['id'],
  data() {
    return {
      meetingroom01_temperature: "",
      meetingroom01_count: "",
      meetingroom01_door: "",
      meetingroom02_temperature: "",
      meetingroom02_count: "",
      meetingroom02_door: "",
      tearoom_temperature: "",
      tearoom_door: "",
      office_temperature: "",
      office_count: "",
      office_door: "",
      corridor_temperature: "",
      corridor_door: "",
    }
  },
  mounted() { this.getCatClass() },
  methods: {
    getCatClass() {
      axios.post('api/structure/room/query', "meetingroom01",
        {
          headers: {
            'Content-Type': 'application/text'
          }
        }).then(res => {
          this.meetingroom01_temperature = res.data.temperature;
          this.meetingroom01_count = res.data.people_count;
        }).catch(err => {
          console.log(err)
        })
      axios.post('api/structure/room/query', "meetingroom02",
        {
          headers: {
            'Content-Type': 'application/text'
          }
        }).then(res => {
          this.meetingroom02_temperature = res.data.temperature;
          this.meetingroom02_count = res.data.people_count;
        }).catch(err => {
          console.log(err)
        })
      axios.post('api/structure/room/query', "tearoom01",
        {
          headers: {
            'Content-Type': 'application/text'
          }
        }).then(res => {
          this.tearoom_temperature = res.data.temperature;
          this.tearoom_count = res.data.people_count;
        }).catch(err => {
          console.log(err)
        })
      axios.post('api/structure/room/query', "laboratory01",
        {
          headers: {
            'Content-Type': 'application/text'
          }
        }).then(res => {
          this.office_temperature = res.data.temperature;
          this.office_count = res.data.people_count;
        }).catch(err => {
          console.log(err)
        })
      axios.post('api/structure/room/query', "corridor01",
        {
          headers: {
            'Content-Type': 'application/text'
          }
        }).then(res => {
          this.corridor_temperature = res.data.temperature;
          this.corridor_count = res.data.people_count;
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.information-outer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: scroll;
  margin-bottom: 2%;
}

.MeetingRoom_one_container,
.MeetingRoom_two_container,
.TeaRoom_container,
.Office_container,
.Corridor_container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.row {
  height: 20%;
  width: 98%;
  margin-left: 1%;
  margin-right: 1%;
}

.el-col {
  height: 100%;
}

.el-card {
  height: 100%;
}

.el-card__body {
  height: 100%;
  padding: 0 0 0 0;
}

.room-inner {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 25px);
  overflow-x: scroll;
  overflow-y: scroll;
}

.room {
  display: inline-block;
  height: 100%;
  margin-left: 3%;
  margin-right: 3%;
}

.name::-webkit-scrollbar,
.room-inner::-webkit-scrollbar,
.information-outer::-webkit-scrollbar {
  display: none;
}

.first-infor {
  margin: auto 0;
  white-space: nowrap;
}

.infor-TeaRoom,
.infor-Corridor {
  margin-top: 5.5vh;
  margin-bottom: 0;
  white-space: nowrap;
}

.infor-Office,
.infor-MeetingRoom {
  margin-top: 2.5vh;
  margin-bottom: 0;
  white-space: nowrap;
}

.name {
  display: block;
  overflow-x: scroll;
  width: 100%;
  height: 25px;
  white-space: nowrap;
  margin-top: 2%;
  margin-bottom: 2%;
  text-align: center;
  font-weight: bold;
}

p {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>

