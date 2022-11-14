import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClasses')).toBe('someClasses');
    });

    test('with additional class', () => {
        const expected = 'someClasses class1 class2';
        expect(classNames('someClasses', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClasses class1 class2 hovered scrollable';
        expect(classNames(
            'someClasses',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClasses class1 class2 hovered';
        expect(classNames(
            'someClasses',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClasses class1 class2 hovered';
        expect(classNames(
            'someClasses',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
