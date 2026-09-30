import { AirConditioner } from './air-conditioner.js';
import { App } from './app.js';
import { ChangeAirConditionerTemperature } from './commands/change-air-conditioner-temperature.js';
import { TurnOffAirConditioner } from './commands/turn-off-air-conditioner.js';
import { TurnOffLightBulb } from './commands/turn-off-light-bulb.js';
import { TurnOnAirConditioner } from './commands/turn-on-air-conditioner.js';
import { TurnOnLightBulb } from './commands/turn-on-light-bulb.js';
import { LightBulb } from './light-bulb.js';

let bedLight: LightBulb;
let livingLight: LightBulb;
let ac: AirConditioner;
let app: App;
let turnOnBedLightId: number;
let turnOffBedLightId: number;
let turnOnLivingLightId: number;
let turnOffLivingLightId: number;
let turnOnACId: number;
let turnOffACId: number;
let changeACTemperatureId: number;

describe('Command Pattern', () => {
  beforeEach(() => {
    bedLight = new LightBulb();
    livingLight = new LightBulb();
    ac = new AirConditioner();

    const turnOnBedLightCommand = new TurnOnLightBulb(bedLight);
    const turnOffBedLightCommand = new TurnOffLightBulb(bedLight);

    const turnOnLivingLightCommand = new TurnOnLightBulb(livingLight);
    const turnOffLivingLightCommand = new TurnOffLightBulb(livingLight);

    const turnOnACCommand = new TurnOnAirConditioner(ac);
    const turnOffACCommand = new TurnOffAirConditioner(ac);
    const changeACTemperatureCommand = new ChangeAirConditionerTemperature(ac);

    app = new App();

    turnOnBedLightId = app.setCommand(turnOnBedLightCommand);
    turnOffBedLightId = app.setCommand(turnOffBedLightCommand);
    turnOnLivingLightId = app.setCommand(turnOnLivingLightCommand);
    turnOffLivingLightId = app.setCommand(turnOffLivingLightCommand);
    turnOnACId = app.setCommand(turnOnACCommand);
    turnOffACId = app.setCommand(turnOffACCommand);
    changeACTemperatureId = app.setCommand(changeACTemperatureCommand);
  });

  it('should turn on bedroom light bulb only', () => {
    app.onClick(turnOnBedLightId);
    expect(bedLight.getState()).toBe(true);
    expect(livingLight.getState()).toBe(false);
  });

  it('should turn on living room light bulb', () => {
    app.onClick(turnOnLivingLightId);
    expect(livingLight.getState()).toBe(true);
  });

  it('should turn on air conditioner', () => {
    app.onClick(turnOnACId);
    expect(ac.getState()).toBe(true);
  });

  it('should turn off bedroom light bulb only', () => {
    livingLight.turnOn();
    app.onClick(turnOffBedLightId);
    expect(bedLight.getState()).toBe(false);
    expect(livingLight.getState()).toBe(true);
  });

  it('should turn off living room light bulb', () => {
    app.onClick(turnOffLivingLightId);
    expect(livingLight.getState()).toBe(false);
  });

  it('should turn off air conditioner', () => {
    app.onClick(turnOffACId);
    expect(ac.getState()).toBe(false);
  });

  it('should change air conditioner temperature', () => {
    app.onClick(turnOnACId);
    app
      .getCommand<ChangeAirConditionerTemperature>(changeACTemperatureId)
      .setTemperature(18);
    app.onClick(changeACTemperatureId);
    expect(ac.getState()).toBe(true);
    expect(ac.getTemperature()).toBe(18);
  });
});
