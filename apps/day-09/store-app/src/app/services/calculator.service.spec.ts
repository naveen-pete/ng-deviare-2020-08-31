import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  it('should add 2 numbers and return result', () => {
    // arrange - preparation (step 1)
    const logger = new LoggerService();
    const service = new CalculatorService(logger);

    // act - execute (step 2)
    const result = service.add(1, 2);

    // assert - verification (step 3)
    expect(result).toBe(3);
  });

  it('should subtract 2 numbers and return result', () => {
    // arrange - preparation (step 1)
    const logger = new LoggerService();
    const service = new CalculatorService(logger);

    // act - execute (step 2)
    const result = service.subtract(10, 2);

    // assert - verification (step 3)
    expect(result).toBe(8);
  });
});

