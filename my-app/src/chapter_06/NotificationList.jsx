import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  { id: 1, message: "안녕하세요, 오늘 일정을 알려드립니다." },
  { id: 2, message: "점심 시간입니다." },
  { id: 3, message: "곧 미팅이 시작됩니다." },
  { id: 4, message: "미팅 종료 10분 전입니다." },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 3000);
  }

  render() {
    return (
      <div>
        {this.state.notifications?.map((noti) => (
          <Notification message={noti.message} key={noti.id} id={noti.id} />
        ))}
      </div>
    );
  }
}

export default NotificationList;
