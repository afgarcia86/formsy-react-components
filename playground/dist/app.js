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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwbGF5Z3JvdW5kL3NyYy9hcHAuanMiLCJwbGF5Z3JvdW5kL3NyYy9vcHRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ01PO0lBQVU7SUFBZTtJQUFPO0lBQVk7SUFBSztJQUFRO0lBQU07OztBQUV0RSxJQUFNLFNBQVMsZ0JBQU0sV0FBTixDQUFrQjs7OztBQUU3QixZQUFRLENBQUMsZ0NBQUksa0JBQUosQ0FBVDs7QUFFQSw4QkFBUztBQUNMLGVBQ0k7a0NBQVEsSUFBUjs7QUFDSSwyQkFBVyxLQUFLLGtCQUFMLEVBQVg7ZUFDSSxLQUFLLEtBQUw7QUFDSixxQkFBSSxRQUFKO2NBSEo7WUFLSyxLQUFLLEtBQUwsQ0FBVyxRQUFYO1NBTlQsQ0FESztLQUpvQjtDQUFsQixDQUFUOztJQWtCQTs7O0FBRUYsYUFGRSxVQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsWUFFaUI7Ozs7MkVBRmpCLHVCQUdRLFFBRFM7O0FBSWYsY0FBSyxLQUFMLEdBQWE7QUFDVCxvQkFBUSxZQUFSO0FBQ0EsOEJBQWtCLEtBQWxCO0FBQ0Esc0JBQVUsS0FBVjtTQUhKOzs7QUFKZSxhQVdmLENBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEIsQ0FYZTtBQVlmLGNBQUssVUFBTCxHQUFrQixNQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsT0FBbEIsQ0FaZTtBQWFmLGNBQUssU0FBTCxHQUFpQixNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQWpCLENBYmU7O0tBQW5COztpQkFGRTs7b0NBa0JVOztBQUVSLGdCQUFNLFNBQVMsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixJQUFqQixDQUFzQixNQUF0QixDQUZQO0FBR1IsbUJBQU8sS0FBUCxHQUhROzs7O21DQU1ELE1BQU07QUFDYixvQkFBUSxHQUFSLENBQVks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O0FBRUEsOEJBQVM7QUFDTCxlQUNJOztjQUFLLFdBQVUsTUFBVixFQUFMO1lBQ0k7c0NBQVEsSUFBUjtrQkFBYSxXQUFXLEtBQUssa0JBQUwsRUFBWCxFQUFiO2dCQUNJLDhCQUFDLFVBQUQ7QUFDSSwwQkFBSyxRQUFMO0FBQ0EsMEJBQUssUUFBTDtBQUNBLDJCQUFNLFFBQU47QUFDQSwyQkFBTyxLQUFLLEtBQUwsQ0FBVyxZQUFYO0FBQ1AsNkJBQVMsQ0FDTCxFQUFDLE9BQU8sWUFBUCxFQUFxQixPQUFPOzs7O3lCQUFQLEVBRGpCLEVBRUwsRUFBQyxPQUFPLFVBQVAsRUFBbUIsT0FBTzs7Ozt5QkFBUCxFQUZmLEVBR0wsRUFBQyxPQUFPLGFBQVAsRUFBc0IsT0FBTzs7Ozt5QkFBUCxFQUhsQixDQUFUO0FBS0EsOEJBQVUsS0FBSyxLQUFMLENBQVcsWUFBWDtpQkFWZCxDQURKO2dCQWFJLDhCQUFDLFFBQUQ7QUFDSSwwQkFBSyxrQkFBTDtBQUNBLDJCQUFPLEtBQUssS0FBTCxDQUFXLHNCQUFYO0FBQ1AsOEJBQVUsS0FBSyxLQUFMLENBQVcsWUFBWDtBQUNWLDJCQUFNLEtBQU47QUFDQSw4QkFBUyxrQkFBVDtpQkFMSixDQWJKO2dCQW9CSSw4QkFBQyxRQUFEO0FBQ0ksMEJBQUssVUFBTDtBQUNBLDJCQUFPLEtBQUssS0FBTCxDQUFXLGNBQVg7QUFDUCw4QkFBVSxLQUFLLEtBQUwsQ0FBVyxZQUFYO0FBQ1YsMkJBQU0sS0FBTjtBQUNBLDhCQUFTLFVBQVQ7aUJBTEosQ0FwQko7YUFESjtTQURKLENBREs7S0FKcUI7Q0FBbEIsQ0FBVjs7QUF3Q04sT0FBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBGb3Jtc3kgZnJvbSAnZm9ybXN5LXJlYWN0JztcbmltcG9ydCBGUkMgZnJvbSAnZm9ybXN5LXJlYWN0LWNvbXBvbmVudHMnO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcblxuY29uc3Qge0NoZWNrYm94LCBDaGVja2JveEdyb3VwLCBJbnB1dCwgUmFkaW9Hcm91cCwgUm93LCBTZWxlY3QsIEZpbGUsIFRleHRhcmVhfSA9IEZSQztcblxuY29uc3QgTXlGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgbWl4aW5zOiBbRlJDLlBhcmVudENvbnRleHRNaXhpbl0sXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybXN5LkZvcm1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuZ2V0TGF5b3V0Q2xhc3NOYW1lKCl9XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgcmVmPVwiZm9ybXN5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvRm9ybXN5LkZvcm0+XG4gICAgICAgICk7XG4gICAgfVxuXG59KTtcblxuY2xhc3MgUGxheWdyb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLy8gRGVmYXVsdCBzdGF0ZVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbGF5b3V0OiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICB2YWxpZGF0ZVByaXN0aW5lOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEJpbmQgdGhpc1xuICAgICAgICB0aGlzLmNoYW5nZU9wdGlvbiA9IHRoaXMuY2hhbmdlT3B0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlc2V0Rm9ybSA9IHRoaXMucmVzZXRGb3JtLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcmVzZXRGb3JtKCkge1xuICAgICAgICAvLyBUaGlzIGlzIG5hc3R5XG4gICAgICAgIGNvbnN0IGZvcm1zeSA9IHRoaXMucmVmcy5teWZvcm0ucmVmcy5mb3Jtc3k7XG4gICAgICAgIGZvcm1zeS5yZXNldCgpO1xuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLCBkYXRhKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VPcHRpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0ge307XG4gICAgICAgIG5ld1N0YXRlW25hbWVdID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICB2YXIgcmFkaW9PcHRpb25zID0gW1xuICAgICAgICAgICAge3ZhbHVlOiAnYScsIGxhYmVsOiAnT3B0aW9uIEEnfSxcbiAgICAgICAgICAgIHt2YWx1ZTogJ2InLCBsYWJlbDogJ09wdGlvbiBCJ30sXG4gICAgICAgICAgICB7dmFsdWU6ICdjJywgbGFiZWw6ICdPcHRpb24gQyd9XG4gICAgICAgIF07XG5cbiAgICAgICAgdmFyIHJhZGlvT3B0aW9uc0Rpc2FibGVkID0gW1xuICAgICAgICAgICAge3ZhbHVlOiAnYScsIGxhYmVsOiAnT3B0aW9uIEEnfSxcbiAgICAgICAgICAgIHt2YWx1ZTogJ2InLCBsYWJlbDogJ09wdGlvbiBCJywgZGlzYWJsZWQ6IHRydWV9LFxuICAgICAgICAgICAge3ZhbHVlOiAnYycsIGxhYmVsOiAnT3B0aW9uIEMnfVxuICAgICAgICBdO1xuXG4gICAgICAgIHZhciBvcHRpb25ZID0ge1xuICAgICAgICAgICAgdmFsdWU6ICd5JyxcbiAgICAgICAgICAgIGxhYmVsOiAnT3B0aW9uIFkgKHllbGxvdyBjc3MgY2xhc3MpJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3llbGxvdydcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9uWVsnZGF0YS1ub3RlJ10gPSAnVGhpcyBpcyBhIGRhdGEgYXR0cmlidXRlLic7XG4gICAgICAgIHZhciBzZWxlY3RPcHRpb25zID0gW1xuICAgICAgICAgICAge3ZhbHVlOiAnYScsIGxhYmVsOiAnT3B0aW9uIEEnfSxcbiAgICAgICAgICAgIHt2YWx1ZTogJ2EnLCBsYWJlbDogJ09wdGlvbiBBIChhZ2FpbiknfSxcbiAgICAgICAgICAgIHt2YWx1ZTogJ2InLCBsYWJlbDogJ09wdGlvbiBCJ30sXG4gICAgICAgICAgICB7dmFsdWU6ICdjJywgbGFiZWw6ICdPcHRpb24gQyd9LFxuICAgICAgICAgICAge3ZhbHVlOiAnZCcsIGxhYmVsOiAnT3B0aW9uIEQnLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAgICAgICAgICBvcHRpb25ZXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFyIHNpbmdsZVNlbGVjdE9wdGlvbnMgPSBzZWxlY3RPcHRpb25zLnNsaWNlKDApO1xuICAgICAgICBzaW5nbGVTZWxlY3RPcHRpb25zLnVuc2hpZnQoe3ZhbHVlOiAnJywgbGFiZWw6ICdQbGVhc2Ugc2VsZWN04oCmJ30pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkZvcm0gUGxheWdyb3VuZCAgKEJvb3RzdHJhcCB2NCk8L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMz5PcHRpb25z4oCmPC9oMz5cbiAgICAgICAgICAgICAgICA8T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICBsYXlvdXRDaG9pY2U9e3RoaXMuc3RhdGUubGF5b3V0fVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVByaXN0aW5lQ2hvaWNlPXt0aGlzLnN0YXRlLnZhbGlkYXRlUHJpc3RpbmV9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkQ2hvaWNlPXt0aGlzLnN0YXRlLmRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VPcHRpb249e3RoaXMuY2hhbmdlT3B0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+TGF5b3V0OiA8Y29kZT57dGhpcy5zdGF0ZS5sYXlvdXR9PC9jb2RlPjwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPE15Rm9ybVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtfVxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9e3RoaXMuc3RhdGUubGF5b3V0fVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVByaXN0aW5lPXt0aGlzLnN0YXRlLnZhbGlkYXRlUHJpc3RpbmV9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICByZWY9XCJteWZvcm1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5JbnB1dCB0eXBlczwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlY3JldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJJJ20gaGlkZGVuIVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRleHQxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFydGlzYW5DcmFmdGVkQmVzcG9rZUlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIZXJlIGlzIGEgdGV4dCBpbnB1dC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUaGlzIGlzIGEgcmVxdWlyZWQgdGV4dCBpbnB1dC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRhdGVbMF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRoaXMgaXMgYSBkYXRlIGlucHV0LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaGlzIGlzIGFuIGVtYWlsIGlucHV0LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlRoaXMgZW1haWwgZmllbGQgc2hvdWxkIG5vdCBhdXRvY29tcGxldGUuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz1cImlzRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbWFpbDogJ1RoaXMgZG9lc27igJl0IGxvb2sgbGlrZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmQxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz1cIm1pbkxlbmd0aDo4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3I9XCJZb3VyIHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmcuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBhIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmQyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb25maXJtIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPVwiZXF1YWxzRmllbGQ6cGFzc3dvcmQxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVxdWFsc0ZpZWxkOiAnUGFzc3dvcmRzIG11c3QgbWF0Y2guJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXR5cGUgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbG91cjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29sb3VyIGlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIiMwMDAwMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPVwiZXF1YWxzOiMwMDAwMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcj1cIllvdSBjYW4gaGF2ZSBhbnkgY29sb3IsIGFzIGxvbmcgYXMgaXQncyBibGFjay5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhbmdlMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSYW5nZSBpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGaWxlIHBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIldhcm5pbmc6IHRoaXMgcmV0dXJucyBhIEZpbGVMaXN0IHRoYXQgd2lsbCBuZWVkIGN1c3RvbSBjb2RpbmcgdG8gYmUgdXNlZnVsLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5UZXh0YXJlYTwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXs0MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHh0QXJlYTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGhpcyBmaWVsZCByZXF1aXJlcyAxMCBjaGFyYWN0ZXJzLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlRoaXMgaXMgc29tZSBoZWxwIHRleHQgZm9yIHRoZSB0ZXh0YXJlYS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPVwibWluTGVuZ3RoOjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogJ1BsZWFzZSBwcm92aWRlIGF0IGxlYXN0IDEwIGNoYXJhY3RlcnMuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPlNlbGVjdDwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxlY3QxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlRoaXMgaXMgYSByZXF1aXJlZCBzZWxlY3QgZWxlbWVudC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3NpbmdsZVNlbGVjdE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGVjdDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtbJ2EnLCAnYyddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VsZWN0IChtdWx0aXBsZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJIZXJlLCDigJxPcHRpb24gQeKAnSBhbmQg4oCcT3B0aW9uIEPigJ0gYXJlIGluaXRpYWxseSBzZWxlY3RlZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3NlbGVjdE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+Q2hlY2tib3hlczwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrYm94MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaGVjayBtZSBvdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0xhYmVsPVwiQ2hlY2tib3ggKHNpbmdsZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveEdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrYm94R3JwMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1snYScsICdjJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaGVja2JveCBncm91cCAoc3RhY2tlZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJIZXJlLCDigJxPcHRpb24gQeKAnSBhbmQg4oCcT3B0aW9uIEPigJ0gYXJlIGluaXRpYWxseSBzZWxlY3RlZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+UmFkaW8gZ3JvdXA8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvR3JwMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJhZGlvIGdyb3VwIChzdGFja2VkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkhlcmUsIOKAnE9wdGlvbiBC4oCdIGlzIGluaXRpYWxseSBzZWxlY3RlZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0dycDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmFkaW8gZ3JvdXAgKGlubGluZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUaGlzIGlzIGEgcmVxdWlyZWQgcmFkaW8gZ3JvdXAuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0dycDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmFkaW8gZ3JvdXAgKGRpc2FibGVkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkhlcmUsIOKAnE9wdGlvbiBC4oCdIGlzIGRpc2FibGVkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPkxheW91dCB0d2Vha3M8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjc3NSb3dUd2Vha1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGhpcyByb3cgaXMgeWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0aGUgcm93Q2xhc3NOYW1lIHByb3BlcnR5IGlzIOKAmHllbGxvd+KAmVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q2xhc3NOYW1lPVwieWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiWW91IGNhbiBtb2RpZnkgdGhlIGNsYXNzIG5hbWUgZm9yIHRoZSByb3cuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3NzV3JhcHBlclR3ZWFrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFiZWwgYW5kIGVsZW1lbnQgd3JhcHBlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFiZWwgaXMg4oCYY29sLXNtLTXigJksIGVsZW1lbnQtd3JhcHBlciBpcyDigJhjb2wtc20tN+KAmVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDbGFzc05hbWU9e1t7J2NvbC1zbS0zJzogZmFsc2V9LCAnY29sLXNtLTUnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50V3JhcHBlckNsYXNzTmFtZT17W3snY29sLXNtLTknOiBmYWxzZX0sICdjb2wtc20tNyddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUaGUgbGFiZWwgYW5kIGVsZW1lbnQtd3JhcHBlciBjbGFzc2VzIGNhbiBiZSBjaGFuZ2VkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPkRpc2FibGVkPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiVGhpcyBmaWVsZCBpcyBhbHdheXMgZGlzYWJsZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlRoZSBkaXNhYmxlZCBwcm9wIG9uIHRoaXMgY29tcG9uZW50IGlzIHNldCB0byB0cnVlLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPklucHV0IGdyb3VwczwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkZG9uLWJlZm9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRkLW9uIGJlZm9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQmVmb3JlPXs8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkZG9uLWFmdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZGQtb24gYWZ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRvbkFmdGVyPXs8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJ1dHRvbi1iZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJ1dHRvbiBiZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25CZWZvcmU9ezxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdHlwZT1cImJ1dHRvblwiPkdvITwvYnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYnV0dG9uLWFmdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCdXR0b24gYWZ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25BZnRlcj17PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiB0eXBlPVwiYnV0dG9uXCI+R28hPC9idXR0b24+fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBsYXlvdXQ9e3RoaXMuc3RhdGUubGF5b3V0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17dGhpcy5yZXNldEZvcm19IHR5cGU9XCJyZXNldFwiIGRlZmF1bHRWYWx1ZT1cIlJlc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBmb3JtTm9WYWxpZGF0ZT17dHJ1ZX0gdHlwZT1cInN1Ym1pdFwiIGRlZmF1bHRWYWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8L015Rm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxQbGF5Z3JvdW5kIC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5Z3JvdW5kJylcbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1zeSBmcm9tICdmb3Jtc3ktcmVhY3QnO1xuaW1wb3J0IEZSQyBmcm9tICdmb3Jtc3ktcmVhY3QtY29tcG9uZW50cyc7XG5cbmNvbnN0IHtDaGVja2JveCwgUmFkaW9Hcm91cCwgUGFyZW50Q29udGV4dE1peGlufSA9IEZSQztcblxuY29uc3QgT3B0aW9ucyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIG1peGluczogW1BhcmVudENvbnRleHRNaXhpbl0sXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGxcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybXN5LkZvcm0gY2xhc3NOYW1lPXt0aGlzLmdldExheW91dENsYXNzTmFtZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXlvdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImlubGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImxheW91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5sYXlvdXRDaG9pY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAnaG9yaXpvbnRhbCcsIGxhYmVsOiA8Y29kZT5ob3Jpem9udGFsPC9jb2RlPn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAndmVydGljYWwnLCBsYWJlbDogPGNvZGU+dmVydGljYWw8L2NvZGU+fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6ICdlbGVtZW50T25seScsIGxhYmVsOiA8Y29kZT5lbGVtZW50T25seTwvY29kZT59XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlT3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2YWxpZGF0ZVByaXN0aW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbGlkYXRlUHJpc3RpbmVDaG9pY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VPcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dMYWJlbD1cInZhbGlkYXRlUHJpc3RpbmVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5kaXNhYmxlZENob2ljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZU9wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0xhYmVsPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybXN5LkZvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25zO1xuIl19
