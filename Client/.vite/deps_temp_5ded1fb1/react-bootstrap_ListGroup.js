"use client";
import {
  Nav_default,
  useNavItem
} from "./chunk-SEMAOXV4.js";
import "./chunk-27ZQ7SA6.js";
import {
  makeEventKey,
  useEventCallback,
  useUncontrolled
} from "./chunk-QPGU2XIW.js";
import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-XSWKAYDN.js";
import {
  require_react
} from "./chunk-MOERMBVA.js";
import {
  __commonJS,
  __toESM
} from "./chunk-BQWMX7FD.js";

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports, module) {
    "use strict";
    var __DEV__ = true;
    var warning3 = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning3 = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format === void 0) {
          throw new Error(
            "`warning(condition, format, ...args)` requires a warning message argument"
          );
        }
        if (!condition) {
          printWarning.apply(null, [format].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning3;
  }
});

// node_modules/react-bootstrap/esm/ListGroup.js
var import_classnames2 = __toESM(require_classnames());
var React2 = __toESM(require_react());
var import_warning2 = __toESM(require_warning());

// node_modules/react-bootstrap/esm/ListGroupItem.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
var import_warning = __toESM(require_warning());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var ListGroupItem = React.forwardRef(({
  bsPrefix,
  active,
  disabled,
  eventKey,
  className,
  variant,
  action,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "list-group-item");
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    ...props
  });
  const handleClick = useEventCallback((event) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    navItemProps.onClick(event);
  });
  if (disabled && props.tabIndex === void 0) {
    props.tabIndex = -1;
    props["aria-disabled"] = true;
  }
  const Component = as || (action ? props.href ? "a" : "button" : "div");
  true ? (0, import_warning.default)(as || !(!action && props.href), "`action=false` and `href` should not be used together.") : void 0;
  return (0, import_jsx_runtime.jsx)(Component, {
    ref,
    ...props,
    ...navItemProps,
    onClick: handleClick,
    className: (0, import_classnames.default)(className, bsPrefix, meta.isActive && "active", disabled && "disabled", variant && `${bsPrefix}-${variant}`, action && `${bsPrefix}-action`)
  });
});
ListGroupItem.displayName = "ListGroupItem";
var ListGroupItem_default = ListGroupItem;

// node_modules/react-bootstrap/esm/ListGroup.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var ListGroup = React2.forwardRef((props, ref) => {
  const {
    className,
    bsPrefix: initialBsPrefix,
    variant,
    horizontal,
    numbered,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as = "div",
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "list-group");
  let horizontalVariant;
  if (horizontal) {
    horizontalVariant = horizontal === true ? "horizontal" : `horizontal-${horizontal}`;
  }
  true ? (0, import_warning2.default)(!(horizontal && variant === "flush"), '`variant="flush"` and `horizontal` should not be used together.') : void 0;
  return (0, import_jsx_runtime2.jsx)(Nav_default, {
    ref,
    ...controlledProps,
    as,
    className: (0, import_classnames2.default)(className, bsPrefix, variant && `${bsPrefix}-${variant}`, horizontalVariant && `${bsPrefix}-${horizontalVariant}`, numbered && `${bsPrefix}-numbered`)
  });
});
ListGroup.displayName = "ListGroup";
var ListGroup_default = Object.assign(ListGroup, {
  Item: ListGroupItem_default
});
export {
  ListGroup_default as default
};
//# sourceMappingURL=react-bootstrap_ListGroup.js.map
