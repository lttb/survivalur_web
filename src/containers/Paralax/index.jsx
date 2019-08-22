import React, { Component } from 'react';
import Types from 'prop-types';

import styled from 'reshadow';
import styles from './Paralax.shadow.css';

import Layer from './Layer';

class Index extends Component {
  static propTypes = {
    layers: Types.array.isRequired,
    aspectRatio: Types.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      containerHeight: 0,
    };

    this.rootRef = React.createRef();

    this.layers = [...props.layers];
    this.setDefaultLayersParams();

    document.addEventListener('scroll', this.update.bind(this));
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    const { aspectRatio } = this.props;

    const [widthAspect, heightAspect] = aspectRatio.split(':');

    this.setState({
      containerHeight:
        (this.root.current.offsetWidth * heightAspect) / widthAspect,
    });
  }

  get root() {
    return this.rootRef;
  }

  setDefaultLayersParams() {
    this.layers = this.layers.map(layer => {
      return {
        ...layer,
        ref: React.createRef(),
        x: 0,
        y: 0,
      };
    });
  }

  setDefaultLayersPositions() {
    this.layers = this.layers.map(layer => {
      return {
        ...layer,
        x: 0,
        y: 0,
      };
    });
  }

  layersComparator(a, b) {
    return a.zIndex < b.zIndex ? -1 : 1;
  }

  update() {
    const container = this.root.current;
    if (
      window.scrollY > container.offsetTop &&
      window.scrollY < container.offsetTop + container.offsetHeight
    ) {
      this.updateParams();
      this.updateDOM();
    } else if (window.scrollY < container.offsetTop) {
      this.setDefaultLayersPositions();
      this.updateDOM();
    }
  }

  updateParams() {
    const container = this.root.current;
    this.layers = this.layers.map(layer => {
      return {
        ...layer,
        x: layer.x,
        y: (window.scrollY - container.offsetTop) * layer.sensitive,
      };
    });
  }

  updateDOM() {
    this.layers.forEach(layer => {
      const node = layer.ref.current.root;
      node.style.top = `${layer.y}px`;
      node.style.left = `${layer.x}px`;
    });
  }

  render() {
    const { layers, layersComparator, state, props } = this;
    const { containerHeight } = state;
    return styled(styles)`
      container {
        height: ${`${containerHeight}px`};
      }
    `(
      <wrapper className={props.className} ref={this.rootRef}>
        <container>
          {layers.sort(layersComparator).map((layer, index) => {
            return (
              <Layer
                key={index}
                ref={layer.ref}
                zIndex={layer.zIndex}
                src={layer.src}
                alt={layer.alt}
                x={layer.x}
                y={layer.y}
              />
            );
          })}
        </container>
      </wrapper>
    );
  }
}

export default Index;
