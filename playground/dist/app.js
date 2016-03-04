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
        key: 'pretendChange',
        value: function pretendChange(name, value) {
            console.log("nothing");
        }
    }, {
        key: 'changeOnBlur',
        value: function changeOnBlur(name, value) {
            console.log(name, value);
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
                            onChange: this.pretendChange,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwbGF5Z3JvdW5kL3NyYy9hcHAuanMiLCJwbGF5Z3JvdW5kL3NyYy9vcHRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ01PO0lBQVU7SUFBZTtJQUFPO0lBQVk7SUFBSztJQUFRO0lBQU07OztBQUV0RSxJQUFNLFNBQVMsZ0JBQU0sV0FBTixDQUFrQjs7OztBQUU3QixZQUFRLENBQUMsZ0NBQUksa0JBQUosQ0FBVDs7QUFFQSw4QkFBUztBQUNMLGVBQ0k7a0NBQVEsSUFBUjs7QUFDSSwyQkFBVyxLQUFLLGtCQUFMLEVBQVg7ZUFDSSxLQUFLLEtBQUw7QUFDSixxQkFBSSxRQUFKO2NBSEo7WUFLSyxLQUFLLEtBQUwsQ0FBVyxRQUFYO1NBTlQsQ0FESztLQUpvQjtDQUFsQixDQUFUOztJQWtCQTs7O0FBRUYsYUFGRSxVQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsWUFFaUI7Ozs7MkVBRmpCLHVCQUdRLFFBRFM7O0FBSWYsY0FBSyxLQUFMLEdBQWE7QUFDVCxvQkFBUSxZQUFSO0FBQ0EsOEJBQWtCLEtBQWxCO0FBQ0Esc0JBQVUsS0FBVjtTQUhKOzs7QUFKZSxhQVdmLENBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEIsQ0FYZTtBQVlmLGNBQUssVUFBTCxHQUFrQixNQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsT0FBbEIsQ0FaZTtBQWFmLGNBQUssU0FBTCxHQUFpQixNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQWpCLENBYmU7O0tBQW5COztpQkFGRTs7b0NBa0JVOztBQUVSLGdCQUFNLFNBQVMsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixJQUFqQixDQUFzQixNQUF0QixDQUZQO0FBR1IsbUJBQU8sS0FBUCxHQUhROzs7O21DQU1ELE1BQU07QUFDYixvQkFBUSxHQUFSLENBQVks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VUFBVDtpQkFMSixDQXBCSjthQURKO1NBREosQ0FESztLQUpxQjtDQUFsQixDQUFWOztBQXdDTixPQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEZvcm1zeSBmcm9tICdmb3Jtc3ktcmVhY3QnO1xuaW1wb3J0IEZSQyBmcm9tICdmb3Jtc3ktcmVhY3QtY29tcG9uZW50cyc7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuXG5jb25zdCB7Q2hlY2tib3gsIENoZWNrYm94R3JvdXAsIElucHV0LCBSYWRpb0dyb3VwLCBSb3csIFNlbGVjdCwgRmlsZSwgVGV4dGFyZWF9ID0gRlJDO1xuXG5jb25zdCBNeUZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBtaXhpbnM6IFtGUkMuUGFyZW50Q29udGV4dE1peGluXSxcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3Jtc3kuRm9ybVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5nZXRMYXlvdXRDbGFzc05hbWUoKX1cbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICByZWY9XCJmb3Jtc3lcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9Gb3Jtc3kuRm9ybT5cbiAgICAgICAgKTtcbiAgICB9XG5cbn0pO1xuXG5jbGFzcyBQbGF5Z3JvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvLyBEZWZhdWx0IHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsYXlvdXQ6ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIHZhbGlkYXRlUHJpc3RpbmU6IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQmluZCB0aGlzXG4gICAgICAgIHRoaXMuY2hhbmdlT3B0aW9uID0gdGhpcy5jaGFuZ2VPcHRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJtaXRGb3JtID0gdGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVzZXRGb3JtID0gdGhpcy5yZXNldEZvcm0uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICByZXNldEZvcm0oKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgbmFzdHlcbiAgICAgICAgY29uc3QgZm9ybXN5ID0gdGhpcy5yZWZzLm15Zm9ybS5yZWZzLmZvcm1zeTtcbiAgICAgICAgZm9ybXN5LnJlc2V0KCk7XG4gICAgfVxuXG4gICAgc3VibWl0Rm9ybShkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMsIGRhdGEpO1xuICAgIH1cblxuICAgIGNoYW5nZU9wdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSB7fTtcbiAgICAgICAgbmV3U3RhdGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgcHJldGVuZENoYW5nZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdGhpbmdcIilcbiAgICB9XG5cbiAgICBjaGFuZ2VPbkJsdXIobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSwgdmFsdWUpXG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuICAgICAgICBuZXdTdGF0ZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHJhZGlvT3B0aW9ucyA9IFtcbiAgICAgICAgICAgIHt2YWx1ZTogJ2EnLCBsYWJlbDogJ09wdGlvbiBBJ30sXG4gICAgICAgICAgICB7dmFsdWU6ICdiJywgbGFiZWw6ICdPcHRpb24gQid9LFxuICAgICAgICAgICAge3ZhbHVlOiAnYycsIGxhYmVsOiAnT3B0aW9uIEMnfVxuICAgICAgICBdO1xuXG4gICAgICAgIHZhciByYWRpb09wdGlvbnNEaXNhYmxlZCA9IFtcbiAgICAgICAgICAgIHt2YWx1ZTogJ2EnLCBsYWJlbDogJ09wdGlvbiBBJ30sXG4gICAgICAgICAgICB7dmFsdWU6ICdiJywgbGFiZWw6ICdPcHRpb24gQicsIGRpc2FibGVkOiB0cnVlfSxcbiAgICAgICAgICAgIHt2YWx1ZTogJ2MnLCBsYWJlbDogJ09wdGlvbiBDJ31cbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgb3B0aW9uWSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAneScsXG4gICAgICAgICAgICBsYWJlbDogJ09wdGlvbiBZICh5ZWxsb3cgY3NzIGNsYXNzKScsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd5ZWxsb3cnXG4gICAgICAgIH07XG4gICAgICAgIG9wdGlvbllbJ2RhdGEtbm90ZSddID0gJ1RoaXMgaXMgYSBkYXRhIGF0dHJpYnV0ZS4nO1xuICAgICAgICB2YXIgc2VsZWN0T3B0aW9ucyA9IFtcbiAgICAgICAgICAgIHt2YWx1ZTogJ2EnLCBsYWJlbDogJ09wdGlvbiBBJ30sXG4gICAgICAgICAgICB7dmFsdWU6ICdhJywgbGFiZWw6ICdPcHRpb24gQSAoYWdhaW4pJ30sXG4gICAgICAgICAgICB7dmFsdWU6ICdiJywgbGFiZWw6ICdPcHRpb24gQid9LFxuICAgICAgICAgICAge3ZhbHVlOiAnYycsIGxhYmVsOiAnT3B0aW9uIEMnfSxcbiAgICAgICAgICAgIHt2YWx1ZTogJ2QnLCBsYWJlbDogJ09wdGlvbiBEJywgZGlzYWJsZWQ6IHRydWV9LFxuICAgICAgICAgICAgb3B0aW9uWVxuICAgICAgICBdO1xuXG4gICAgICAgIHZhciBzaW5nbGVTZWxlY3RPcHRpb25zID0gc2VsZWN0T3B0aW9ucy5zbGljZSgwKTtcbiAgICAgICAgc2luZ2xlU2VsZWN0T3B0aW9ucy51bnNoaWZ0KHt2YWx1ZTogJycsIGxhYmVsOiAnUGxlYXNlIHNlbGVjdOKApid9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5Gb3JtIFBsYXlncm91bmQgIChCb290c3RyYXAgdjQpPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDM+T3B0aW9uc+KApjwvaDM+XG4gICAgICAgICAgICAgICAgPE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q2hvaWNlPXt0aGlzLnN0YXRlLmxheW91dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVQcmlzdGluZUNob2ljZT17dGhpcy5zdGF0ZS52YWxpZGF0ZVByaXN0aW5lfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZENob2ljZT17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlT3B0aW9uPXt0aGlzLmNoYW5nZU9wdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkxheW91dDogPGNvZGU+e3RoaXMuc3RhdGUubGF5b3V0fTwvY29kZT48L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxNeUZvcm1cbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX1cbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PXt0aGlzLnN0YXRlLmxheW91dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVQcmlzdGluZT17dGhpcy5zdGF0ZS52YWxpZGF0ZVByaXN0aW5lfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgcmVmPVwibXlmb3JtXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+SW5wdXQgdHlwZXM8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWNyZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiSSdtIGhpZGRlbiFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZXh0MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhcnRpc2FuQ3JhZnRlZEJlc3Bva2VJZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGVyZSBpcyBhIHRleHQgaW5wdXQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGhpcyBpcyBhIHJlcXVpcmVkIHRleHQgaW5wdXQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcmV0ZW5kQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5jaGFuZ2VPbkJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVswXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGhpcyBpcyBhIGRhdGUgaW5wdXQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRoaXMgaXMgYW4gZW1haWwgaW5wdXQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGhpcyBlbWFpbCBmaWVsZCBzaG91bGQgbm90IGF1dG9jb21wbGV0ZS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPVwiaXNFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiAnVGhpcyBkb2VzbuKAmXQgbG9vayBsaWtlIGEgdmFsaWQgZW1haWwgYWRkcmVzcy4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPVwibWluTGVuZ3RoOjhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcj1cIllvdXIgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbmZpcm0gcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9XCJlcXVhbHNGaWVsZDpwYXNzd29yZDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXF1YWxzRmllbGQ6ICdQYXNzd29yZHMgbXVzdCBtYXRjaC4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJldHlwZSBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29sb3VyMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb2xvdXIgaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9XCJlcXVhbHM6IzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yPVwiWW91IGNhbiBoYXZlIGFueSBjb2xvciwgYXMgbG9uZyBhcyBpdCdzIGJsYWNrLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFuZ2UxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJhbmdlIGlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGUxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZpbGUgcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiV2FybmluZzogdGhpcyByZXR1cm5zIGEgRmlsZUxpc3QgdGhhdCB3aWxsIG5lZWQgY3VzdG9tIGNvZGluZyB0byBiZSB1c2VmdWwuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPlRleHRhcmVhPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9ezQwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0eHRBcmVhMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaGlzIGZpZWxkIHJlcXVpcmVzIDEwIGNoYXJhY3RlcnMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGhpcyBpcyBzb21lIGhlbHAgdGV4dCBmb3IgdGhlIHRleHRhcmVhLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9XCJtaW5MZW5ndGg6MTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAnUGxlYXNlIHByb3ZpZGUgYXQgbGVhc3QgMTAgY2hhcmFjdGVycy4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+U2VsZWN0PC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGVjdDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGhpcyBpcyBhIHJlcXVpcmVkIHNlbGVjdCBlbGVtZW50LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17c2luZ2xlU2VsZWN0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1snYScsICdjJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3QgKG11bHRpcGxlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkhlcmUsIOKAnE9wdGlvbiBB4oCdIGFuZCDigJxPcHRpb24gQ+KAnSBhcmUgaW5pdGlhbGx5IHNlbGVjdGVkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17c2VsZWN0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5DaGVja2JveGVzPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tib3gxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNoZWNrIG1lIG91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93TGFiZWw9XCJDaGVja2JveCAoc2luZ2xlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tib3hHcnAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17WydhJywgJ2MnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNoZWNrYm94IGdyb3VwIChzdGFja2VkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkhlcmUsIOKAnE9wdGlvbiBB4oCdIGFuZCDigJxPcHRpb24gQ+KAnSBhcmUgaW5pdGlhbGx5IHNlbGVjdGVkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5SYWRpbyBncm91cDwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9HcnAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmFkaW8gZ3JvdXAgKHN0YWNrZWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiSGVyZSwg4oCcT3B0aW9uIELigJ0gaXMgaW5pdGlhbGx5IHNlbGVjdGVkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvR3JwMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImlubGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSYWRpbyBncm91cCAoaW5saW5lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlRoaXMgaXMgYSByZXF1aXJlZCByYWRpbyBncm91cC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvR3JwM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImlubGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSYWRpbyBncm91cCAoZGlzYWJsZWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiSGVyZSwg4oCcT3B0aW9uIELigJ0gaXMgZGlzYWJsZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnNEaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+TGF5b3V0IHR3ZWFrczwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNzc1Jvd1R3ZWFrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaGlzIHJvdyBpcyB5ZWxsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRoZSByb3dDbGFzc05hbWUgcHJvcGVydHkgaXMg4oCYeWVsbG934oCZXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dDbGFzc05hbWU9XCJ5ZWxsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJZb3UgY2FuIG1vZGlmeSB0aGUgY2xhc3MgbmFtZSBmb3IgdGhlIHJvdy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjc3NXcmFwcGVyVHdlYWtzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYWJlbCBhbmQgZWxlbWVudCB3cmFwcGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbCBpcyDigJhjb2wtc20tNeKAmSwgZWxlbWVudC13cmFwcGVyIGlzIOKAmGNvbC1zbS034oCZXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENsYXNzTmFtZT17W3snY29sLXNtLTMnOiBmYWxzZX0sICdjb2wtc20tNSddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRXcmFwcGVyQ2xhc3NOYW1lPXtbeydjb2wtc20tOSc6IGZhbHNlfSwgJ2NvbC1zbS03J119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlRoZSBsYWJlbCBhbmQgZWxlbWVudC13cmFwcGVyIGNsYXNzZXMgY2FuIGJlIGNoYW5nZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+RGlzYWJsZWQ8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJUaGlzIGZpZWxkIGlzIGFsd2F5cyBkaXNhYmxlZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGhlIGRpc2FibGVkIHByb3Agb24gdGhpcyBjb21wb25lbnQgaXMgc2V0IHRvIHRydWUuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+SW5wdXQgZ3JvdXBzPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkb24tYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZGQtb24gYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25CZWZvcmU9ezxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkb24tYWZ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkZC1vbiBhZnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYnV0dG9uLWJlZm9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQnV0dG9uIGJlZm9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkJlZm9yZT17PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiB0eXBlPVwiYnV0dG9uXCI+R28hPC9idXR0b24+fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJidXR0b24tYWZ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJ1dHRvbiBhZnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkFmdGVyPXs8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIHR5cGU9XCJidXR0b25cIj5HbyE8L2J1dHRvbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGxheW91dD17dGhpcy5zdGF0ZS5sYXlvdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXt0aGlzLnJlc2V0Rm9ybX0gdHlwZT1cInJlc2V0XCIgZGVmYXVsdFZhbHVlPVwiUmVzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGZvcm1Ob1ZhbGlkYXRlPXt0cnVlfSB0eXBlPVwic3VibWl0XCIgZGVmYXVsdFZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvTXlGb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFBsYXlncm91bmQgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXlncm91bmQnKVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybXN5IGZyb20gJ2Zvcm1zeS1yZWFjdCc7XG5pbXBvcnQgRlJDIGZyb20gJ2Zvcm1zeS1yZWFjdC1jb21wb25lbnRzJztcblxuY29uc3Qge0NoZWNrYm94LCBSYWRpb0dyb3VwLCBQYXJlbnRDb250ZXh0TWl4aW59ID0gRlJDO1xuXG5jb25zdCBPcHRpb25zID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgbWl4aW5zOiBbUGFyZW50Q29udGV4dE1peGluXSxcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsbFwiPlxuICAgICAgICAgICAgICAgIDxGb3Jtc3kuRm9ybSBjbGFzc05hbWU9e3RoaXMuZ2V0TGF5b3V0Q2xhc3NOYW1lKCl9PlxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxheW91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW5saW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwibGF5b3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmxheW91dENob2ljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6ICdob3Jpem9udGFsJywgbGFiZWw6IDxjb2RlPmhvcml6b250YWw8L2NvZGU+fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6ICd2ZXJ0aWNhbCcsIGxhYmVsOiA8Y29kZT52ZXJ0aWNhbDwvY29kZT59LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogJ2VsZW1lbnRPbmx5JywgbGFiZWw6IDxjb2RlPmVsZW1lbnRPbmx5PC9jb2RlPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VPcHRpb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZhbGlkYXRlUHJpc3RpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsaWRhdGVQcmlzdGluZUNob2ljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZU9wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0xhYmVsPVwidmFsaWRhdGVQcmlzdGluZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmRpc2FibGVkQ2hvaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlT3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93TGFiZWw9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Gb3Jtc3kuRm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9wdGlvbnM7XG4iXX0=
