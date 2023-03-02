const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_KARYAWAN } = process.env;

const api = apiAdapter(URL_SERVICE_KARYAWAN);

module.exports = async (req, res) => {
  try {
    const teacher = await api.get("/api/karyawan");
    return res.json(teacher.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "service unavailable" });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
