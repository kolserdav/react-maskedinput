export default MaskedInput;
declare class MaskedInput extends React.Component<any, any, any> {
    static propTypes: {
        mask: PropTypes.Validator<string>;
        formatCharacters: PropTypes.Requireable<object>;
        placeholderChar: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        value: string;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    UNSAFE_componentWillMount(): void;
    mask: InputMask | undefined;
    UNSAFE_componentWillReceiveProps(nextProps: any): void;
    UNSAFE_componentWillUpdate(nextProps: any, nextState: any): void;
    componentDidUpdate(prevProps: any): void;
    _updatePattern(props: any): void;
    _updateMaskSelection(): void;
    _updateInputSelection(): void;
    _onChange: (e: any) => void;
    _onKeyDown: (e: any) => void;
    _onKeyPress: (e: any) => void;
    _onPaste: (e: any) => void;
    _getDisplayValue(): any;
    _keyPressPropName(): "onBeforeInput" | "onKeyPress";
    _getEventHandlers(): {
        [x: string]: (e: any) => void;
        onChange: (e: any) => void;
        onKeyDown: (e: any) => void;
        onPaste: (e: any) => void;
    };
    focus(): void;
    blur(): void;
    render(): JSX.Element;
    input: any;
}
import React from "react";
import InputMask from "@kolserdav/inputmask-core";
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map