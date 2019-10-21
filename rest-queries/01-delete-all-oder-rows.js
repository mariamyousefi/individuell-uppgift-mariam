// Note: Using expect test synta
module.exports = ({ expect, response }) => ({
    path: 'order-rows',
    method: 'delete',
    test() {
      // Expect the deletion to go through without warnings
      expect(response.warningCount).to.equal(0);
    }
  });