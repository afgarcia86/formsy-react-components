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
            console.log("onBlur: " + value);
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
                            help: 'This is a required text input. It updates state onBlur',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwbGF5Z3JvdW5kL3NyYy9hcHAuanMiLCJwbGF5Z3JvdW5kL3NyYy9vcHRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ01PO0lBQVU7SUFBZTtJQUFPO0lBQVk7SUFBSztJQUFRO0lBQU07OztBQUV0RSxJQUFNLFNBQVMsZ0JBQU0sV0FBTixDQUFrQjs7OztBQUU3QixZQUFRLENBQUMsZ0NBQUksa0JBQUosQ0FBVDs7QUFFQSw4QkFBUztBQUNMLGVBQ0k7a0NBQVEsSUFBUjs7QUFDSSwyQkFBVyxLQUFLLGtCQUFMLEVBQVg7ZUFDSSxLQUFLLEtBQUw7QUFDSixxQkFBSSxRQUFKO2NBSEo7WUFLSyxLQUFLLEtBQUwsQ0FBVyxRQUFYO1NBTlQsQ0FESztLQUpvQjtDQUFsQixDQUFUOztJQWtCQTs7O0FBRUYsYUFGRSxVQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsWUFFaUI7Ozs7MkVBRmpCLHVCQUdRLFFBRFM7O0FBSWYsY0FBSyxLQUFMLEdBQWE7QUFDVCxvQkFBUSxZQUFSO0FBQ0EsOEJBQWtCLEtBQWxCO0FBQ0Esc0JBQVUsS0FBVjtTQUhKOzs7QUFKZSxhQVdmLENBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEIsQ0FYZTtBQVlmLGNBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEIsQ0FaZTtBQWFmLGNBQUssVUFBTCxHQUFrQixNQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsT0FBbEIsQ0FiZTtBQWNmLGNBQUssU0FBTCxHQUFpQixNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQWpCLENBZGU7O0tBQW5COztpQkFGRTs7b0NBbUJVOztBQUVSLGdCQUFNLFNBQVMsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixJQUFqQixDQUFzQixNQUF0QixDQUZQO0FB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O1NBREosQ0FESztLQUpxQjtDQUFsQixDQUFWOztBQXdDTixPQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEZvcm1zeSBmcm9tICdmb3Jtc3ktcmVhY3QnO1xuaW1wb3J0IEZSQyBmcm9tICdmb3Jtc3ktcmVhY3QtY29tcG9uZW50cyc7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuXG5jb25zdCB7Q2hlY2tib3gsIENoZWNrYm94R3JvdXAsIElucHV0LCBSYWRpb0dyb3VwLCBSb3csIFNlbGVjdCwgRmlsZSwgVGV4dGFyZWF9ID0gRlJDO1xuXG5jb25zdCBNeUZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBtaXhpbnM6IFtGUkMuUGFyZW50Q29udGV4dE1peGluXSxcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3Jtc3kuRm9ybVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5nZXRMYXlvdXRDbGFzc05hbWUoKX1cbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICByZWY9XCJmb3Jtc3lcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9Gb3Jtc3kuRm9ybT5cbiAgICAgICAgKTtcbiAgICB9XG5cbn0pO1xuXG5jbGFzcyBQbGF5Z3JvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvLyBEZWZhdWx0IHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsYXlvdXQ6ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIHZhbGlkYXRlUHJpc3RpbmU6IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQmluZCB0aGlzXG4gICAgICAgIHRoaXMuY2hhbmdlT3B0aW9uID0gdGhpcy5jaGFuZ2VPcHRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VPbkJsdXIgPSB0aGlzLmNoYW5nZU9uQmx1ci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXNldEZvcm0gPSB0aGlzLnJlc2V0Rm9ybS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBuYXN0eVxuICAgICAgICBjb25zdCBmb3Jtc3kgPSB0aGlzLnJlZnMubXlmb3JtLnJlZnMuZm9ybXN5O1xuICAgICAgICBmb3Jtc3kucmVzZXQoKTtcbiAgICB9XG5cbiAgICBzdWJtaXRGb3JtKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgY2hhbmdlT3B0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuICAgICAgICBuZXdTdGF0ZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VPbkJsdXIobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0ge307XG4gICAgICAgIG5ld1N0YXRlW25hbWVdID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQmx1cjogXCIrdmFsdWUpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciByYWRpb09wdGlvbnMgPSBbXG4gICAgICAgICAgICB7dmFsdWU6ICdhJywgbGFiZWw6ICdPcHRpb24gQSd9LFxuICAgICAgICAgICAge3ZhbHVlOiAnYicsIGxhYmVsOiAnT3B0aW9uIEInfSxcbiAgICAgICAgICAgIHt2YWx1ZTogJ2MnLCBsYWJlbDogJ09wdGlvbiBDJ31cbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgcmFkaW9PcHRpb25zRGlzYWJsZWQgPSBbXG4gICAgICAgICAgICB7dmFsdWU6ICdhJywgbGFiZWw6ICdPcHRpb24gQSd9LFxuICAgICAgICAgICAge3ZhbHVlOiAnYicsIGxhYmVsOiAnT3B0aW9uIEInLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAgICAgICAgICB7dmFsdWU6ICdjJywgbGFiZWw6ICdPcHRpb24gQyd9XG4gICAgICAgIF07XG5cbiAgICAgICAgdmFyIG9wdGlvblkgPSB7XG4gICAgICAgICAgICB2YWx1ZTogJ3knLFxuICAgICAgICAgICAgbGFiZWw6ICdPcHRpb24gWSAoeWVsbG93IGNzcyBjbGFzcyknLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAneWVsbG93J1xuICAgICAgICB9O1xuICAgICAgICBvcHRpb25ZWydkYXRhLW5vdGUnXSA9ICdUaGlzIGlzIGEgZGF0YSBhdHRyaWJ1dGUuJztcbiAgICAgICAgdmFyIHNlbGVjdE9wdGlvbnMgPSBbXG4gICAgICAgICAgICB7dmFsdWU6ICdhJywgbGFiZWw6ICdPcHRpb24gQSd9LFxuICAgICAgICAgICAge3ZhbHVlOiAnYScsIGxhYmVsOiAnT3B0aW9uIEEgKGFnYWluKSd9LFxuICAgICAgICAgICAge3ZhbHVlOiAnYicsIGxhYmVsOiAnT3B0aW9uIEInfSxcbiAgICAgICAgICAgIHt2YWx1ZTogJ2MnLCBsYWJlbDogJ09wdGlvbiBDJ30sXG4gICAgICAgICAgICB7dmFsdWU6ICdkJywgbGFiZWw6ICdPcHRpb24gRCcsIGRpc2FibGVkOiB0cnVlfSxcbiAgICAgICAgICAgIG9wdGlvbllcbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgc2luZ2xlU2VsZWN0T3B0aW9ucyA9IHNlbGVjdE9wdGlvbnMuc2xpY2UoMCk7XG4gICAgICAgIHNpbmdsZVNlbGVjdE9wdGlvbnMudW5zaGlmdCh7dmFsdWU6ICcnLCBsYWJlbDogJ1BsZWFzZSBzZWxlY3TigKYnfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+Rm9ybSBQbGF5Z3JvdW5kICAoQm9vdHN0cmFwIHY0KTwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgzPk9wdGlvbnPigKY8L2gzPlxuICAgICAgICAgICAgICAgIDxPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIGxheW91dENob2ljZT17dGhpcy5zdGF0ZS5sYXlvdXR9XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlUHJpc3RpbmVDaG9pY2U9e3RoaXMuc3RhdGUudmFsaWRhdGVQcmlzdGluZX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRDaG9pY2U9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZU9wdGlvbj17dGhpcy5jaGFuZ2VPcHRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5MYXlvdXQ6IDxjb2RlPnt0aGlzLnN0YXRlLmxheW91dH08L2NvZGU+PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TXlGb3JtXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19XG4gICAgICAgICAgICAgICAgICAgIGxheW91dD17dGhpcy5zdGF0ZS5sYXlvdXR9XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlUHJpc3RpbmU9e3RoaXMuc3RhdGUudmFsaWRhdGVQcmlzdGluZX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgIHJlZj1cIm15Zm9ybVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPklucHV0IHR5cGVzPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VjcmV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkknbSBoaWRkZW4hXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGV4dDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYXJ0aXNhbkNyYWZ0ZWRCZXNwb2tlSWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhlcmUgaXMgYSB0ZXh0IGlucHV0LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlRoaXMgaXMgYSByZXF1aXJlZCB0ZXh0IGlucHV0LiBJdCB1cGRhdGVzIHN0YXRlIG9uQmx1clwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmNoYW5nZU9uQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRlWzBdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaGlzIGlzIGEgZGF0ZSBpbnB1dC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGhpcyBpcyBhbiBlbWFpbCBpbnB1dC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUaGlzIGVtYWlsIGZpZWxkIHNob3VsZCBub3QgYXV0b2NvbXBsZXRlLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9XCJpc0VtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6ICdUaGlzIGRvZXNu4oCZdCBsb29rIGxpa2UgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9XCJtaW5MZW5ndGg6OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yPVwiWW91ciBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz1cImVxdWFsc0ZpZWxkOnBhc3N3b3JkMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcXVhbHNGaWVsZDogJ1Bhc3N3b3JkcyBtdXN0IG1hdGNoLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmV0eXBlIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb2xvdXIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbG91ciBpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz1cImVxdWFsczojMDAwMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3I9XCJZb3UgY2FuIGhhdmUgYW55IGNvbG9yLCBhcyBsb25nIGFzIGl0J3MgYmxhY2suXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYW5nZTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmFuZ2UgaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmlsZSBwaWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXYXJuaW5nOiB0aGlzIHJldHVybnMgYSBGaWxlTGlzdCB0aGF0IHdpbGwgbmVlZCBjdXN0b20gY29kaW5nIHRvIGJlIHVzZWZ1bC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+VGV4dGFyZWE8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17NDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR4dEFyZWExXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRoaXMgZmllbGQgcmVxdWlyZXMgMTAgY2hhcmFjdGVycy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUaGlzIGlzIHNvbWUgaGVscCB0ZXh0IGZvciB0aGUgdGV4dGFyZWEuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz1cIm1pbkxlbmd0aDoxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6ICdQbGVhc2UgcHJvdmlkZSBhdCBsZWFzdCAxMCBjaGFyYWN0ZXJzLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5TZWxlY3Q8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUaGlzIGlzIGEgcmVxdWlyZWQgc2VsZWN0IGVsZW1lbnQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtzaW5nbGVTZWxlY3RPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxlY3QyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17WydhJywgJ2MnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdCAobXVsdGlwbGUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiSGVyZSwg4oCcT3B0aW9uIEHigJ0gYW5kIOKAnE9wdGlvbiBD4oCdIGFyZSBpbml0aWFsbHkgc2VsZWN0ZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtzZWxlY3RPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPkNoZWNrYm94ZXM8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGVja2JveDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2hlY2sgbWUgb3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dMYWJlbD1cIkNoZWNrYm94IChzaW5nbGUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGVja2JveEdycDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtbJ2EnLCAnYyddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2hlY2tib3ggZ3JvdXAgKHN0YWNrZWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiSGVyZSwg4oCcT3B0aW9uIEHigJ0gYW5kIOKAnE9wdGlvbiBD4oCdIGFyZSBpbml0aWFsbHkgc2VsZWN0ZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPlJhZGlvIGdyb3VwPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0dycDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSYWRpbyBncm91cCAoc3RhY2tlZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJIZXJlLCDigJxPcHRpb24gQuKAnSBpcyBpbml0aWFsbHkgc2VsZWN0ZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9HcnAyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW5saW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJhZGlvIGdyb3VwIChpbmxpbmUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGhpcyBpcyBhIHJlcXVpcmVkIHJhZGlvIGdyb3VwLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9HcnAzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW5saW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJhZGlvIGdyb3VwIChkaXNhYmxlZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJIZXJlLCDigJxPcHRpb24gQuKAnSBpcyBkaXNhYmxlZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5MYXlvdXQgdHdlYWtzPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3NzUm93VHdlYWtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRoaXMgcm93IGlzIHllbGxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGhlIHJvd0NsYXNzTmFtZSBwcm9wZXJ0eSBpcyDigJh5ZWxsb3figJlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0NsYXNzTmFtZT1cInllbGxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIllvdSBjYW4gbW9kaWZ5IHRoZSBjbGFzcyBuYW1lIGZvciB0aGUgcm93LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNzc1dyYXBwZXJUd2Vha3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhYmVsIGFuZCBlbGVtZW50IHdyYXBwZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhYmVsIGlzIOKAmGNvbC1zbS014oCZLCBlbGVtZW50LXdyYXBwZXIgaXMg4oCYY29sLXNtLTfigJlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lPXtbeydjb2wtc20tMyc6IGZhbHNlfSwgJ2NvbC1zbS01J119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFdyYXBwZXJDbGFzc05hbWU9e1t7J2NvbC1zbS05JzogZmFsc2V9LCAnY29sLXNtLTcnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGhlIGxhYmVsIGFuZCBlbGVtZW50LXdyYXBwZXIgY2xhc3NlcyBjYW4gYmUgY2hhbmdlZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5EaXNhYmxlZDwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlRoaXMgZmllbGQgaXMgYWx3YXlzIGRpc2FibGVkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUaGUgZGlzYWJsZWQgcHJvcCBvbiB0aGlzIGNvbXBvbmVudCBpcyBzZXQgdG8gdHJ1ZS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5JbnB1dCBncm91cHM8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRvbi1iZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkZC1vbiBiZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRvbkJlZm9yZT17PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRvbi1hZnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRkLW9uIGFmdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJidXR0b24tYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCdXR0b24gYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQmVmb3JlPXs8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIHR5cGU9XCJidXR0b25cIj5HbyE8L2J1dHRvbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJ1dHRvbi1hZnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQnV0dG9uIGFmdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQWZ0ZXI9ezxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdHlwZT1cImJ1dHRvblwiPkdvITwvYnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbGF5b3V0PXt0aGlzLnN0YXRlLmxheW91dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e3RoaXMucmVzZXRGb3JtfSB0eXBlPVwicmVzZXRcIiBkZWZhdWx0VmFsdWU9XCJSZXNldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZm9ybU5vVmFsaWRhdGU9e3RydWV9IHR5cGU9XCJzdWJtaXRcIiBkZWZhdWx0VmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPC9NeUZvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8UGxheWdyb3VuZCAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWdyb3VuZCcpXG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3Jtc3kgZnJvbSAnZm9ybXN5LXJlYWN0JztcbmltcG9ydCBGUkMgZnJvbSAnZm9ybXN5LXJlYWN0LWNvbXBvbmVudHMnO1xuXG5jb25zdCB7Q2hlY2tib3gsIFJhZGlvR3JvdXAsIFBhcmVudENvbnRleHRNaXhpbn0gPSBGUkM7XG5cbmNvbnN0IE9wdGlvbnMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBtaXhpbnM6IFtQYXJlbnRDb250ZXh0TWl4aW5dLFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxsXCI+XG4gICAgICAgICAgICAgICAgPEZvcm1zeS5Gb3JtIGNsYXNzTmFtZT17dGhpcy5nZXRMYXlvdXRDbGFzc05hbWUoKX0+XG4gICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGF5b3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJsYXlvdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMubGF5b3V0Q2hvaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogJ2hvcml6b250YWwnLCBsYWJlbDogPGNvZGU+aG9yaXpvbnRhbDwvY29kZT59LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogJ3ZlcnRpY2FsJywgbGFiZWw6IDxjb2RlPnZlcnRpY2FsPC9jb2RlPn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAnZWxlbWVudE9ubHknLCBsYWJlbDogPGNvZGU+ZWxlbWVudE9ubHk8L2NvZGU+fVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZU9wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmFsaWRhdGVQcmlzdGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWxpZGF0ZVByaXN0aW5lQ2hvaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlT3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93TGFiZWw9XCJ2YWxpZGF0ZVByaXN0aW5lXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZGlzYWJsZWRDaG9pY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VPcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dMYWJlbD1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1zeS5Gb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gT3B0aW9ucztcbiJdfQ==
