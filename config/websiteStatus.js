let maintenanceMode = false;

module.exports = {
  getStatus: () => maintenanceMode,
  setStatus: (status) => {
    maintenanceMode = status;
  },
};