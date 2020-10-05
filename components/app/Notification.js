import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";
import { inject, observer } from "mobx-react";

@inject("UIStore")
@observer
class NotificationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onDismissSnackBar = this.onDismissSnackBar.bind(this);
  }

  onDismissSnackBar() {
    this.props.UIStore.notify(null);
  }

  render() {
    return (
      <Snackbar
        visible={!!this.props.UIStore.notification.message}
        onDismiss={this.onDismissSnackBar}
        action={{
          label: "Okay",
          onPress: this.onDismissSnackBar,
        }}
      >
        {this.props.UIStore.notification.message}
      </Snackbar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default NotificationComponent;
