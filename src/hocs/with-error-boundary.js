import React, { Component } from 'react';

const FallbackComDefault = ({ error, originalProps, onReset }) => (
  <div>Something broken!</div>
);

const onErrorDefault = (error, info) => {};

const withErrorBoundary = (Comp, FallbackComp = FallbackComDefault, onError = onErrorDefault) => {
  class WithErrorBoundary extends Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null
      }
      
      this.resetError = this.resetError.bind(this);
    }

    render() {
      const {
        props,
        state: { error },
        resetError
      } = this;

      return error ? (
        <FallbackComDefault 
          error={error}
          onReset={resetError}
          originalProps={props}
        />
      ) : (
        <Comp {...props} />
      )
    }

    componentDidCatch(error, info) {
      onError(error, info);
      this.setState({ error })
    }

    resetError() {
      this.setState({ error: null })
    }
  }

  WithErrorBoundary.displayName = `withErrorBoundary(${Comp.displayName || Comp.name})`;

  return WithErrorBoundary;
}

export { withErrorBoundary }