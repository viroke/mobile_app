import connect from "../api/connect";

const Service = () => {
  const getPeople = async (pathQuery, resultRefenceKey = "organizers") => {
    try {
      let response = await connect.get(pathQuery);
      let { data: body } = response;
      return (body.data && body.data[resultRefenceKey]) || [];
    } catch (error) {
      console.log(`getPeople error`, { e });
      return [];
    }
  };

  return {
    getPeople
  };
};

export default Service();
