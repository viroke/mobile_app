import connect from "../api/connect";

const Service = () => {
  const getAvailableBanks = async () => {
    try {
      let response = await connect.get("payment/get_banks");
      let { data: body } = response;
      return (body.data && body.data.banks) || [];
    } catch (e) {
      console.log(`getAvailableBanks error`, { e });
      return [];
    }
  };

  const verifyAccountNumber = async (accountNumber, bankCode) => {
    let q = {accountNumber, bankCode}
    try {
      let response = await connect.get(`payment/verify_account_number?${q}`);
      let { data: body } = response;
      return (body.data && body.data.bank);
    } catch (e) {
      console.log(`verifyAccountNumber error`, { e });
      return null;
    }
  };

  return {
    getAvailableBanks
  };
};

export default Service();
