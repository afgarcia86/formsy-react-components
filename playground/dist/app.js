(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _formsyReactComponents = require('formsy-react-components');

var _formsyReactComponents2 = _interopRequireDefault(_formsyReactComponents);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = _formsyReactComponents2.default.Checkbox;
var CheckboxGroup = _formsyReactComponents2.default.CheckboxGroup;
var Input = _formsyReactComponents2.default.Input;
var RadioGroup = _formsyReactComponents2.default.RadioGroup;
var Row = _formsyReactComponents2.default.Row;
var Select = _formsyReactComponents2.default.Select;
var File = _formsyReactComponents2.default.File;
var Textarea = _formsyReactComponents2.default.Textarea;


var MyForm = _react2.default.createClass({
    displayName: 'MyForm',


    mixins: [_formsyReactComponents2.default.ParentContextMixin],

    render: function render() {
        return _react2.default.createElement(
            _formsyReact2.default.Form,
            _extends({
                className: this.getLayoutClassName()
            }, this.props, {
                ref: 'formsy'
            }),
            this.props.children
        );
    }
});

var Playground = function (_React$Component) {
    _inherits(Playground, _React$Component);

    function Playground(props) {
        _classCallCheck(this, Playground);

        // Default state

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Playground).call(this, props));

        _this.state = {
            layout: 'horizontal',
            validatePristine: false,
            disabled: false
        };

        // Bind this
        _this.changeOption = _this.changeOption.bind(_this);
        _this.changeOnBlur = _this.changeOnBlur.bind(_this);
        _this.submitForm = _this.submitForm.bind(_this);
        _this.resetForm = _this.resetForm.bind(_this);
        return _this;
    }

    _createClass(Playground, [{
        key: 'resetForm',
        value: function resetForm() {
            // This is nasty
            var formsy = this.refs.myform.refs.formsy;
            formsy.reset();
        }
    }, {
        key: 'submitForm',
        value: function submitForm(data) {
            console.log(this, data);
        }
    }, {
        key: 'changeOption',
        value: function changeOption(name, value) {
            var newState = {};
            newState[name] = value;
            this.setState(newState);
        }
    }, {
        key: 'changeOnBlur',
        value: function changeOnBlur(name, value) {
            var newState = {};
            newState[name] = value;
            this.setState(newState);
        }
    }, {
        key: 'render',
        value: function render() {

            var radioOptions = [{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }, { value: 'c', label: 'Option C' }];

            var radioOptionsDisabled = [{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B', disabled: true }, { value: 'c', label: 'Option C' }];

            var optionY = {
                value: 'y',
                label: 'Option Y (yellow css class)',
                className: 'yellow'
            };
            optionY['data-note'] = 'This is a data attribute.';
            var selectOptions = [{ value: 'a', label: 'Option A' }, { value: 'a', label: 'Option A (again)' }, { value: 'b', label: 'Option B' }, { value: 'c', label: 'Option C' }, { value: 'd', label: 'Option D', disabled: true }, optionY];

            var singleSelectOptions = selectOptions.slice(0);
            singleSelectOptions.unshift({ value: '', label: 'Please select…' });

            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'page-header' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Form Playground  (Bootstrap v4)'
                    )
                ),
                _react2.default.createElement(
                    'h3',
                    null,
                    'Options…'
                ),
                _react2.default.createElement(_options2.default, {
                    layoutChoice: this.state.layout,
                    validatePristineChoice: this.state.validatePristine,
                    disabledChoice: this.state.disabled,
                    changeOption: this.changeOption
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'page-header' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Layout: ',
                        _react2.default.createElement(
                            'code',
                            null,
                            this.state.layout
                        )
                    )
                ),
                _react2.default.createElement(
                    MyForm,
                    {
                        onSubmit: this.submitForm,
                        layout: this.state.layout,
                        validatePristine: this.state.validatePristine,
                        disabled: this.state.disabled,
                        ref: 'myform'
                    },
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Input types'
                        ),
                        _react2.default.createElement(Input, {
                            name: 'secret',
                            value: 'I\'m hidden!',
                            type: 'hidden'
                        }),
                        _react2.default.createElement(Input, {
                            name: 'text1',
                            id: 'artisanCraftedBespokeId',
                            value: '',
                            label: 'Text',
                            type: 'text',
                            placeholder: 'Here is a text input.',
                            help: 'This is a required text input.',
                            onBlur: this.changeOnBlur,
                            required: true
                        }),
                        _react2.default.createElement(Input, {
                            name: 'date[0]',
                            value: '',
                            label: 'Date',
                            type: 'date',
                            placeholder: 'This is a date input.',
                            required: true
                        }),
                        _react2.default.createElement(Input, {
                            name: 'email',
                            value: '',
                            label: 'Email',
                            type: 'email',
                            autoComplete: 'off',
                            placeholder: 'This is an email input.',
                            help: 'This email field should not autocomplete.',
                            validations: 'isEmail',
                            validationErrors: {
                                isEmail: 'This doesn’t look like a valid email address.'
                            },
                            required: true
                        }),
                        _react2.default.createElement(Input, {
                            name: 'password1',
                            value: '',
                            label: 'Password',
                            type: 'password',
                            validations: 'minLength:8',
                            validationError: 'Your password must be at least 8 characters long.',
                            placeholder: 'Choose a password'
                        }),
                        _react2.default.createElement(Input, {
                            name: 'password2',
                            value: '',
                            label: 'Confirm password',
                            type: 'password',
                            validations: 'equalsField:password1',
                            validationErrors: {
                                equalsField: 'Passwords must match.'
                            },
                            placeholder: 'Retype password'
                        }),
                        _react2.default.createElement(Input, {
                            type: 'color',
                            name: 'colour1',
                            label: 'Colour input',
                            value: '#000000',
                            validations: 'equals:#000000',
                            validationError: 'You can have any color, as long as it\'s black.'
                        }),
                        _react2.default.createElement(Input, {
                            type: 'range',
                            name: 'range1',
                            label: 'Range input',
                            min: 0,
                            max: 10,
                            step: 2
                        }),
                        _react2.default.createElement(File, {
                            name: 'file1',
                            label: 'File picker',
                            help: 'Warning: this returns a FileList that will need custom coding to be useful.',
                            required: true,
                            multiple: true
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Textarea'
                        ),
                        _react2.default.createElement(Textarea, {
                            rows: 3,
                            cols: 40,
                            name: 'txtArea1',
                            label: 'Textarea',
                            placeholder: 'This field requires 10 characters.',
                            help: 'This is some help text for the textarea.',
                            validations: 'minLength:10',
                            validationErrors: {
                                minLength: 'Please provide at least 10 characters.'
                            }
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Select'
                        ),
                        _react2.default.createElement(Select, {
                            name: 'select1',
                            label: 'Select',
                            help: 'This is a required select element.',
                            options: singleSelectOptions,
                            required: true
                        }),
                        _react2.default.createElement(Select, {
                            name: 'select2',
                            value: ['a', 'c'],
                            label: 'Select (multiple)',
                            help: 'Here, “Option A” and “Option C” are initially selected.',
                            options: selectOptions,
                            multiple: true
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Checkboxes'
                        ),
                        _react2.default.createElement(Checkbox, {
                            name: 'checkbox1',
                            value: true,
                            label: 'Check me out',
                            rowLabel: 'Checkbox (single)'
                        }),
                        _react2.default.createElement(CheckboxGroup, {
                            name: 'checkboxGrp1',
                            value: ['a', 'c'],
                            label: 'Checkbox group (stacked)',
                            help: 'Here, “Option A” and “Option C” are initially selected.',
                            options: radioOptions
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Radio group'
                        ),
                        _react2.default.createElement(RadioGroup, {
                            name: 'radioGrp1',
                            value: 'b',
                            label: 'Radio group (stacked)',
                            help: 'Here, “Option B” is initially selected.',
                            options: radioOptions
                        }),
                        _react2.default.createElement(RadioGroup, {
                            name: 'radioGrp2',
                            type: 'inline',
                            label: 'Radio group (inline)',
                            help: 'This is a required radio group.',
                            options: radioOptions,
                            required: true
                        }),
                        _react2.default.createElement(RadioGroup, {
                            name: 'radioGrp3',
                            type: 'inline',
                            label: 'Radio group (disabled)',
                            help: 'Here, “Option B” is disabled.',
                            options: radioOptionsDisabled
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Layout tweaks'
                        ),
                        _react2.default.createElement(Input, {
                            name: 'cssRowTweak',
                            value: '',
                            label: 'This row is yellow',
                            type: 'text',
                            placeholder: 'the rowClassName property is ‘yellow’',
                            rowClassName: 'yellow',
                            help: 'You can modify the class name for the row.'
                        }),
                        _react2.default.createElement(Input, {
                            name: 'cssWrapperTweaks',
                            value: '',
                            label: 'Label and element wrapper',
                            type: 'text',
                            placeholder: 'Label is ‘col-sm-5’, element-wrapper is ‘col-sm-7’',
                            labelClassName: [{ 'col-sm-3': false }, 'col-sm-5'],
                            elementWrapperClassName: [{ 'col-sm-9': false }, 'col-sm-7'],
                            help: 'The label and element-wrapper classes can be changed.'
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Disabled'
                        ),
                        _react2.default.createElement(Input, {
                            name: 'disabled',
                            value: 'This field is always disabled.',
                            label: 'Disabled',
                            type: 'text',
                            disabled: true,
                            help: 'The disabled prop on this component is set to true.'
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'legend',
                            null,
                            'Input groups'
                        ),
                        _react2.default.createElement(Input, {
                            name: 'addon-before',
                            value: '',
                            label: 'Add-on before',
                            type: 'text',
                            addonBefore: _react2.default.createElement('span', { className: 'glyphicon glyphicon-search' })
                        }),
                        _react2.default.createElement(Input, {
                            name: 'addon-after',
                            value: '',
                            label: 'Add-on after',
                            type: 'text',
                            addonAfter: _react2.default.createElement('span', { className: 'glyphicon glyphicon-search' })
                        }),
                        _react2.default.createElement(Input, {
                            name: 'button-before',
                            value: '',
                            label: 'Button before',
                            type: 'text',
                            buttonBefore: _react2.default.createElement(
                                'button',
                                { className: 'btn btn-default', type: 'button' },
                                'Go!'
                            )
                        }),
                        _react2.default.createElement(Input, {
                            name: 'button-after',
                            value: '',
                            label: 'Button after',
                            type: 'text',
                            buttonAfter: _react2.default.createElement(
                                'button',
                                { className: 'btn btn-default', type: 'button' },
                                'Go!'
                            )
                        })
                    ),
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            Row,
                            { layout: this.state.layout },
                            _react2.default.createElement('input', { className: 'btn btn-default', onClick: this.resetForm, type: 'reset', defaultValue: 'Reset' }),
                            ' ',
                            _react2.default.createElement('input', { className: 'btn btn-primary', formNoValidate: true, type: 'submit', defaultValue: 'Submit' })
                        )
                    )
                )
            );
        }
    }]);

    return Playground;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Playground, null), document.getElementById('playground'));

},{"./options":2,"formsy-react":"formsy-react","formsy-react-components":"formsy-react-components","react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _formsyReactComponents = require('formsy-react-components');

var _formsyReactComponents2 = _interopRequireDefault(_formsyReactComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = _formsyReactComponents2.default.Checkbox;
var RadioGroup = _formsyReactComponents2.default.RadioGroup;
var ParentContextMixin = _formsyReactComponents2.default.ParentContextMixin;


var Options = _react2.default.createClass({
    displayName: 'Options',


    mixins: [ParentContextMixin],

    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'well' },
            _react2.default.createElement(
                _formsyReact2.default.Form,
                { className: this.getLayoutClassName() },
                _react2.default.createElement(RadioGroup, {
                    name: 'layout',
                    type: 'inline',
                    label: 'layout',
                    value: this.props.layoutChoice,
                    options: [{ value: 'horizontal', label: _react2.default.createElement(
                            'code',
                            null,
                            'horizontal'
                        ) }, { value: 'vertical', label: _react2.default.createElement(
                            'code',
                            null,
                            'vertical'
                        ) }, { value: 'elementOnly', label: _react2.default.createElement(
                            'code',
                            null,
                            'elementOnly'
                        ) }],
                    onChange: this.props.changeOption
                }),
                _react2.default.createElement(Checkbox, {
                    name: 'validatePristine',
                    value: this.props.validatePristineChoice,
                    onChange: this.props.changeOption,
                    label: 'Yes',
                    rowLabel: 'validatePristine'
                }),
                _react2.default.createElement(Checkbox, {
                    name: 'disabled',
                    value: this.props.disabledChoice,
                    onChange: this.props.changeOption,
                    label: 'Yes',
                    rowLabel: 'disabled'
                })
            )
        );
    }
});

module.exports = Options;

},{"formsy-react":"formsy-react","formsy-react-components":"formsy-react-components","react":"react"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwbGF5Z3JvdW5kL3NyYy9hcHAuanMiLCJwbGF5Z3JvdW5kL3NyYy9vcHRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ01PO0lBQVU7SUFBZTtJQUFPO0lBQVk7SUFBSztJQUFRO0lBQU07OztBQUV0RSxJQUFNLFNBQVMsZ0JBQU0sV0FBTixDQUFrQjs7OztBQUU3QixZQUFRLENBQUMsZ0NBQUksa0JBQUosQ0FBVDs7QUFFQSw4QkFBUztBQUNMLGVBQ0k7a0NBQVEsSUFBUjs7QUFDSSwyQkFBVyxLQUFLLGtCQUFMLEVBQVg7ZUFDSSxLQUFLLEtBQUw7QUFDSixxQkFBSSxRQUFKO2NBSEo7WUFLSyxLQUFLLEtBQUwsQ0FBVyxRQUFYO1NBTlQsQ0FESztLQUpvQjtDQUFsQixDQUFUOztJQWtCQTs7O0FBRUYsYUFGRSxVQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsWUFFaUI7Ozs7MkVBRmpCLHVCQUdRLFFBRFM7O0FBSWYsY0FBSyxLQUFMLEdBQWE7QUFDVCxvQkFBUSxZQUFSO0FBQ0EsOEJBQWtCLEtBQWxCO0FBQ0Esc0JBQVUsS0FBVjtTQUhKOzs7QUFKZSxhQVdmLENBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEIsQ0FYZTtBQVlmLGNBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEIsQ0FaZTtBQWFmLGNBQUssVUFBTCxHQUFrQixNQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsT0FBbEIsQ0FiZTtBQWNmLGNBQUssU0FBTCxHQUFpQixNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQWpCLENBZGU7O0tBQW5COztpQkFGRTs7b0NBbUJVOztBQUVSLGdCQUFNLFNBQVMsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixJQUFqQixDQUFzQixNQUF0QixDQUZQO0FB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UCxHQUFpQixPQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgRm9ybXN5IGZyb20gJ2Zvcm1zeS1yZWFjdCc7XG5pbXBvcnQgRlJDIGZyb20gJ2Zvcm1zeS1yZWFjdC1jb21wb25lbnRzJztcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5cbmNvbnN0IHtDaGVja2JveCwgQ2hlY2tib3hHcm91cCwgSW5wdXQsIFJhZGlvR3JvdXAsIFJvdywgU2VsZWN0LCBGaWxlLCBUZXh0YXJlYX0gPSBGUkM7XG5cbmNvbnN0IE15Rm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIG1peGluczogW0ZSQy5QYXJlbnRDb250ZXh0TWl4aW5dLFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm1zeS5Gb3JtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLmdldExheW91dENsYXNzTmFtZSgpfVxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIHJlZj1cImZvcm1zeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L0Zvcm1zeS5Gb3JtPlxuICAgICAgICApO1xuICAgIH1cblxufSk7XG5cbmNsYXNzIFBsYXlncm91bmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIC8vIERlZmF1bHQgc3RhdGVcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxheW91dDogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgdmFsaWRhdGVQcmlzdGluZTogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBCaW5kIHRoaXNcbiAgICAgICAgdGhpcy5jaGFuZ2VPcHRpb24gPSB0aGlzLmNoYW5nZU9wdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYW5nZU9uQmx1ciA9IHRoaXMuY2hhbmdlT25CbHVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlc2V0Rm9ybSA9IHRoaXMucmVzZXRGb3JtLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcmVzZXRGb3JtKCkge1xuICAgICAgICAvLyBUaGlzIGlzIG5hc3R5XG4gICAgICAgIGNvbnN0IGZvcm1zeSA9IHRoaXMucmVmcy5teWZvcm0ucmVmcy5mb3Jtc3k7XG4gICAgICAgIGZvcm1zeS5yZXNldCgpO1xuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLCBkYXRhKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VPcHRpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0ge307XG4gICAgICAgIG5ld1N0YXRlW25hbWVdID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGNoYW5nZU9uQmx1cihuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSB7fTtcbiAgICAgICAgbmV3U3RhdGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciByYWRpb09wdGlvbnMgPSBbXG4gICAgICAgICAgICB7dmFsdWU6ICdhJywgbGFiZWw6ICdPcHRpb24gQSd9LFxuICAgICAgICAgICAge3ZhbHVlOiAnYicsIGxhYmVsOiAnT3B0aW9uIEInfSxcbiAgICAgICAgICAgIHt2YWx1ZTogJ2MnLCBsYWJlbDogJ09wdGlvbiBDJ31cbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgcmFkaW9PcHRpb25zRGlzYWJsZWQgPSBbXG4gICAgICAgICAgICB7dmFsdWU6ICdhJywgbGFiZWw6ICdPcHRpb24gQSd9LFxuICAgICAgICAgICAge3ZhbHVlOiAnYicsIGxhYmVsOiAnT3B0aW9uIEInLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAgICAgICAgICB7dmFsdWU6ICdjJywgbGFiZWw6ICdPcHRpb24gQyd9XG4gICAgICAgIF07XG5cbiAgICAgICAgdmFyIG9wdGlvblkgPSB7XG4gICAgICAgICAgICB2YWx1ZTogJ3knLFxuICAgICAgICAgICAgbGFiZWw6ICdPcHRpb24gWSAoeWVsbG93IGNzcyBjbGFzcyknLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAneWVsbG93J1xuICAgICAgICB9O1xuICAgICAgICBvcHRpb25ZWydkYXRhLW5vdGUnXSA9ICdUaGlzIGlzIGEgZGF0YSBhdHRyaWJ1dGUuJztcbiAgICAgICAgdmFyIHNlbGVjdE9wdGlvbnMgPSBbXG4gICAgICAgICAgICB7dmFsdWU6ICdhJywgbGFiZWw6ICdPcHRpb24gQSd9LFxuICAgICAgICAgICAge3ZhbHVlOiAnYScsIGxhYmVsOiAnT3B0aW9uIEEgKGFnYWluKSd9LFxuICAgICAgICAgICAge3ZhbHVlOiAnYicsIGxhYmVsOiAnT3B0aW9uIEInfSxcbiAgICAgICAgICAgIHt2YWx1ZTogJ2MnLCBsYWJlbDogJ09wdGlvbiBDJ30sXG4gICAgICAgICAgICB7dmFsdWU6ICdkJywgbGFiZWw6ICdPcHRpb24gRCcsIGRpc2FibGVkOiB0cnVlfSxcbiAgICAgICAgICAgIG9wdGlvbllcbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgc2luZ2xlU2VsZWN0T3B0aW9ucyA9IHNlbGVjdE9wdGlvbnMuc2xpY2UoMCk7XG4gICAgICAgIHNpbmdsZVNlbGVjdE9wdGlvbnMudW5zaGlmdCh7dmFsdWU6ICcnLCBsYWJlbDogJ1BsZWFzZSBzZWxlY3TigKYnfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+Rm9ybSBQbGF5Z3JvdW5kICAoQm9vdHN0cmFwIHY0KTwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgzPk9wdGlvbnPigKY8L2gzPlxuICAgICAgICAgICAgICAgIDxPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIGxheW91dENob2ljZT17dGhpcy5zdGF0ZS5sYXlvdXR9XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlUHJpc3RpbmVDaG9pY2U9e3RoaXMuc3RhdGUudmFsaWRhdGVQcmlzdGluZX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRDaG9pY2U9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZU9wdGlvbj17dGhpcy5jaGFuZ2VPcHRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5MYXlvdXQ6IDxjb2RlPnt0aGlzLnN0YXRlLmxheW91dH08L2NvZGU+PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TXlGb3JtXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19XG4gICAgICAgICAgICAgICAgICAgIGxheW91dD17dGhpcy5zdGF0ZS5sYXlvdXR9XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlUHJpc3RpbmU9e3RoaXMuc3RhdGUudmFsaWRhdGVQcmlzdGluZX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgIHJlZj1cIm15Zm9ybVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPklucHV0IHR5cGVzPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VjcmV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkknbSBoaWRkZW4hXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGV4dDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYXJ0aXNhbkNyYWZ0ZWRCZXNwb2tlSWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhlcmUgaXMgYSB0ZXh0IGlucHV0LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlRoaXMgaXMgYSByZXF1aXJlZCB0ZXh0IGlucHV0LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmNoYW5nZU9uQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRlWzBdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaGlzIGlzIGEgZGF0ZSBpbnB1dC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGhpcyBpcyBhbiBlbWFpbCBpbnB1dC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUaGlzIGVtYWlsIGZpZWxkIHNob3VsZCBub3QgYXV0b2NvbXBsZXRlLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9XCJpc0VtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6ICdUaGlzIGRvZXNu4oCZdCBsb29rIGxpa2UgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9XCJtaW5MZW5ndGg6OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yPVwiWW91ciBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz1cImVxdWFsc0ZpZWxkOnBhc3N3b3JkMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcXVhbHNGaWVsZDogJ1Bhc3N3b3JkcyBtdXN0IG1hdGNoLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmV0eXBlIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb2xvdXIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbG91ciBpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz1cImVxdWFsczojMDAwMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3I9XCJZb3UgY2FuIGhhdmUgYW55IGNvbG9yLCBhcyBsb25nIGFzIGl0J3MgYmxhY2suXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYW5nZTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmFuZ2UgaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmlsZSBwaWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXYXJuaW5nOiB0aGlzIHJldHVybnMgYSBGaWxlTGlzdCB0aGF0IHdpbGwgbmVlZCBjdXN0b20gY29kaW5nIHRvIGJlIHVzZWZ1bC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+VGV4dGFyZWE8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17NDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR4dEFyZWExXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRoaXMgZmllbGQgcmVxdWlyZXMgMTAgY2hhcmFjdGVycy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUaGlzIGlzIHNvbWUgaGVscCB0ZXh0IGZvciB0aGUgdGV4dGFyZWEuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz1cIm1pbkxlbmd0aDoxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6ICdQbGVhc2UgcHJvdmlkZSBhdCBsZWFzdCAxMCBjaGFyYWN0ZXJzLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5TZWxlY3Q8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUaGlzIGlzIGEgcmVxdWlyZWQgc2VsZWN0IGVsZW1lbnQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtzaW5nbGVTZWxlY3RPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxlY3QyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17WydhJywgJ2MnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdCAobXVsdGlwbGUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiSGVyZSwg4oCcT3B0aW9uIEHigJ0gYW5kIOKAnE9wdGlvbiBD4oCdIGFyZSBpbml0aWFsbHkgc2VsZWN0ZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtzZWxlY3RPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPkNoZWNrYm94ZXM8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGVja2JveDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2hlY2sgbWUgb3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dMYWJlbD1cIkNoZWNrYm94IChzaW5nbGUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGVja2JveEdycDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtbJ2EnLCAnYyddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2hlY2tib3ggZ3JvdXAgKHN0YWNrZWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiSGVyZSwg4oCcT3B0aW9uIEHigJ0gYW5kIOKAnE9wdGlvbiBD4oCdIGFyZSBpbml0aWFsbHkgc2VsZWN0ZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPlJhZGlvIGdyb3VwPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0dycDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSYWRpbyBncm91cCAoc3RhY2tlZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJIZXJlLCDigJxPcHRpb24gQuKAnSBpcyBpbml0aWFsbHkgc2VsZWN0ZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9HcnAyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW5saW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJhZGlvIGdyb3VwIChpbmxpbmUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGhpcyBpcyBhIHJlcXVpcmVkIHJhZGlvIGdyb3VwLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9HcnAzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW5saW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJhZGlvIGdyb3VwIChkaXNhYmxlZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJIZXJlLCDigJxPcHRpb24gQuKAnSBpcyBkaXNhYmxlZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5MYXlvdXQgdHdlYWtzPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3NzUm93VHdlYWtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRoaXMgcm93IGlzIHllbGxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGhlIHJvd0NsYXNzTmFtZSBwcm9wZXJ0eSBpcyDigJh5ZWxsb3figJlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0NsYXNzTmFtZT1cInllbGxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIllvdSBjYW4gbW9kaWZ5IHRoZSBjbGFzcyBuYW1lIGZvciB0aGUgcm93LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNzc1dyYXBwZXJUd2Vha3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhYmVsIGFuZCBlbGVtZW50IHdyYXBwZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhYmVsIGlzIOKAmGNvbC1zbS014oCZLCBlbGVtZW50LXdyYXBwZXIgaXMg4oCYY29sLXNtLTfigJlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lPXtbeydjb2wtc20tMyc6IGZhbHNlfSwgJ2NvbC1zbS01J119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFdyYXBwZXJDbGFzc05hbWU9e1t7J2NvbC1zbS05JzogZmFsc2V9LCAnY29sLXNtLTcnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGhlIGxhYmVsIGFuZCBlbGVtZW50LXdyYXBwZXIgY2xhc3NlcyBjYW4gYmUgY2hhbmdlZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5EaXNhYmxlZDwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlRoaXMgZmllbGQgaXMgYWx3YXlzIGRpc2FibGVkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUaGUgZGlzYWJsZWQgcHJvcCBvbiB0aGlzIGNvbXBvbmVudCBpcyBzZXQgdG8gdHJ1ZS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5JbnB1dCBncm91cHM8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRvbi1iZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkZC1vbiBiZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRvbkJlZm9yZT17PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRvbi1hZnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRkLW9uIGFmdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJidXR0b24tYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCdXR0b24gYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQmVmb3JlPXs8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIHR5cGU9XCJidXR0b25cIj5HbyE8L2J1dHRvbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJ1dHRvbi1hZnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQnV0dG9uIGFmdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQWZ0ZXI9ezxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdHlwZT1cImJ1dHRvblwiPkdvITwvYnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbGF5b3V0PXt0aGlzLnN0YXRlLmxheW91dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e3RoaXMucmVzZXRGb3JtfSB0eXBlPVwicmVzZXRcIiBkZWZhdWx0VmFsdWU9XCJSZXNldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZm9ybU5vVmFsaWRhdGU9e3RydWV9IHR5cGU9XCJzdWJtaXRcIiBkZWZhdWx0VmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPC9NeUZvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8UGxheWdyb3VuZCAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWdyb3VuZCcpXG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3Jtc3kgZnJvbSAnZm9ybXN5LXJlYWN0JztcbmltcG9ydCBGUkMgZnJvbSAnZm9ybXN5LXJlYWN0LWNvbXBvbmVudHMnO1xuXG5jb25zdCB7Q2hlY2tib3gsIFJhZGlvR3JvdXAsIFBhcmVudENvbnRleHRNaXhpbn0gPSBGUkM7XG5cbmNvbnN0IE9wdGlvbnMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBtaXhpbnM6IFtQYXJlbnRDb250ZXh0TWl4aW5dLFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxsXCI+XG4gICAgICAgICAgICAgICAgPEZvcm1zeS5Gb3JtIGNsYXNzTmFtZT17dGhpcy5nZXRMYXlvdXRDbGFzc05hbWUoKX0+XG4gICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGF5b3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJsYXlvdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMubGF5b3V0Q2hvaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogJ2hvcml6b250YWwnLCBsYWJlbDogPGNvZGU+aG9yaXpvbnRhbDwvY29kZT59LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogJ3ZlcnRpY2FsJywgbGFiZWw6IDxjb2RlPnZlcnRpY2FsPC9jb2RlPn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAnZWxlbWVudE9ubHknLCBsYWJlbDogPGNvZGU+ZWxlbWVudE9ubHk8L2NvZGU+fVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZU9wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmFsaWRhdGVQcmlzdGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWxpZGF0ZVByaXN0aW5lQ2hvaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlT3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93TGFiZWw9XCJ2YWxpZGF0ZVByaXN0aW5lXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZGlzYWJsZWRDaG9pY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VPcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dMYWJlbD1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1zeS5Gb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gT3B0aW9ucztcbiJdfQ==
