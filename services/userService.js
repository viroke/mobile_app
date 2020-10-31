import connect from "../api/connect";

const userService = () => {
  const me = async () => {
    try {
      let response = await connect.get("users/me");
      let { data: body } = response;
      return (body.data && body.data.user);
    } catch (error) {
      console.log(`userService.me error`, { error });
      return null;
    }
  };

  const payoutBanks = async () => {
    try {
      let response = await connect.get("payment/get_saved_account");
      let { data: body } = response;
      return (body.data && body.data.bankAccounts);
    } catch (error) {
      console.log(`userService.payoutBanks error`, { error });
      return [];
    }
  };

  return {
    me,
    payoutBanks
  };
};

export default userService();
