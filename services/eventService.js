import connect from "../api/connect";

const eventService = () => {
  const getUpcomingEvents = async () => {
    try {
      let response = await connect.get("events?upcoming=true");
      let { data: body } = response;
      return (body.data && body.data.events) || [];
    } catch (error) {
      console.log(`getUpcomingEvents error`, { error });
      return [];
    }
  };

  const getFeedEvents = async () => {
    try {
      let response = await connect.get("events");
      let { data: body } = response;
      return (body.data && body.data.events) || [];
    } catch (error) {
      console.log(`getUpcomingEvents error`, { error });
      return [];
    }
  };

  return {
    getUpcomingEvents,
    getFeedEvents,
  };
};

export default eventService();
