const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
	try {
		const objects = [
			...(await promiseTheaterIXX()),
			...(await promiseTheaterVGC()),
		];
		const filteredObject = objects.filter((object) => {
			if (object.hasil === emosi) {
				return object;
			}
		});
		return filteredObject.length;
	} catch (error) {
		return error;
	}
};

module.exports = {
  promiseOutput,
};
