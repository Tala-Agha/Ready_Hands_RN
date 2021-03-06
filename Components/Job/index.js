import React, { Component } from "react";

//Job Map
import JobMap from "./JobMap";
//Job List
import JobList from "./JobList";
//Screen Names
import { JOBLIST, JOBMAP } from "../../Navigation/screenNames";

//Native Base
import {
  Container,
  Tabs,
  Icon,
  Tab,
  TabHeading,
  Text,
  Title,
} from "native-base";

import { connect } from "react-redux";
import { getJobs, getWorkerAppliedJobs } from "../../redux/actions";

//StyleSheet
import styles from "./styles";

class Jobs extends Component {
  state = {
    activePage: 1,
  };

  render() {
    const { navigation, job, getJobs, getWorkerAppliedJobs } = this.props;
    getJobs();
    getWorkerAppliedJobs();
    return (
      <Container>
        <Title style={styles.title}>Jobs</Title>
        <Tabs
          tabBarUnderlineStyle={{
            borderBottomWidth: 4,
            borderBottomColor: "#00838f",
          }}
        >
          <Tab
            heading={
              <TabHeading
                style={{
                  backgroundColor: "white",
                  activeTextStyle: "black",
                  activeTabStyle: "red",
                  underlineStyle: "white",
                }}
              >
                <Icon
                  name="map-marker"
                  type="FontAwesome"
                  style={{
                    color: "#00838f",
                  }}
                />
                <Text
                  style={{
                    color: "#00838f",
                    fontWeight: "bold",
                  }}
                >
                  {JOBMAP}
                </Text>
              </TabHeading>
            }
          >
            <JobMap navigation={navigation} job={job} />
          </Tab>
          <Tab
            heading={
              <TabHeading
                style={{
                  backgroundColor: "white",
                  activeTextStyle: "black",
                  activeTabStyle: "red",
                }}
              >
                <Icon
                  style={{
                    color: "#00838f",
                  }}
                  name="list"
                  type="MaterialIcons"
                />
                <Text
                  style={{
                    color: "#00838f",
                    fontWeight: "bold",
                  }}
                >
                  {JOBLIST}
                </Text>
              </TabHeading>
            }
          >
            <JobList navigation={this.props.navigation} job={this.props.job} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getJobs: () => dispatch(getJobs()),
    getWorkerAppliedJobs: () => dispatch(getWorkerAppliedJobs()),
  };
};
export default connect(null, mapDispatchToProps)(Jobs);
