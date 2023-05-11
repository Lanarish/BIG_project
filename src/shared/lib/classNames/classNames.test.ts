import { classNames } from './classNames';

describe('classNames', () => {
  test('with first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass additionalClass1 additionalClass2';
    expect(classNames('someClass', {}, ['additionalClass1', 'additionalClass2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass additionalClass1 additionalClass2 hovered scrollable';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true },
      ['additionalClass1', 'additionalClass2'],
    )).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass additionalClass1 additionalClass2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: false },
      ['additionalClass1', 'additionalClass2'],
    )).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass additionalClass1 additionalClass2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: undefined },
      ['additionalClass1', 'additionalClass2'],
    )).toBe(expected);
  });
});
