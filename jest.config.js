const merge = require('merge');
const tsPreset = require('ts-jest/jest-preset');
const cloudscapePreset = require('@cloudscape-design/jest-preset');

module.exports = merge.recursive(tsPreset, cloudscapePreset, {
  testEnvironment: 'node',
  roots: ['./src'],
});