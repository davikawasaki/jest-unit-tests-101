const { paymentService } = require('../../src/services');
const userService = require('../../src/services/userService');
const bankService = require('../../src/services/bankService');

const mocks = {
  getPaymentsResponse: require('../../__mock__/getPaymentsResponse.json'),
  getUserResponse: require('../../__mock__/getUserResponse.json'),
  renderPaymentsResponse: require('../../__mock__/renderPaymentsResponse.json'),
};

describe('Render payment spec using jest.fn', () => {
  beforeAll(() => {
    userService.getUser = jest.fn().mockResolvedValue(mocks.getUserResponse);
    bankService.getPayments = jest.fn().mockResolvedValue(mocks.getPaymentsResponse);
  });

  test('should render payments from specific member successfully', async () => {
    const result = await paymentService.renderPayments('marcosrocha');
    expect(userService.getUser).toHaveBeenCalledWith('marcosrocha');
    expect(bankService.getPayments).toHaveBeenCalled();
    expect(result).not.toBeUndefined();
    expect(result).toHaveLength(10);
    expect(result).toStrictEqual(mocks.renderPaymentsResponse);
  });

  test.skip('should fail with toBe comparison payments from specific member successfully', async () => {
    const result = await paymentService.renderPayments('marcosrocha');
    expect(userService.getUser).toHaveBeenCalledWith('marcosrocha');
    expect(bankService.getPayments).toHaveBeenCalled();
    expect(result).toBe(mocks.renderPaymentsResponse);
  });
  
  test('should return empty rendered payments due to user not found', async () => {
    const result = await paymentService.renderPayments('mariobrito');
    expect(userService.getUser).toHaveBeenCalledWith('mariobrito');
    expect(bankService.getPayments).toHaveBeenCalled();
    expect(result).toHaveLength(0);
    expect(result).toStrictEqual([]);
  });
  test('should fail rendering payments due to username not passed', async () => {
    expect(paymentService.renderPayments()).rejects.toThrow(
      /Missing username argument/,
    );
  });
});
