import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import styled from 'styled-components';
import Layout, { Header, Content, Slider, Footer } from './index';

const HeaderContent = styled.div`
  min-height: 100px;
  background: blue;
  line-height: 100px;
  width: 100%;
  text-align: center;
`;

const ContentContent = styled(HeaderContent)`
  background: red;
`;

const FooterContent = styled(HeaderContent)`
  background: yellow;
`;

const SliderContent = styled.div`
  min-width: 100px;
  background: black;
  color: white;
  height: 100%;
  line-height: 100%;
`;


class LayoutStory extends Component {
  render() {
    return (
      <div>
        <h3>Layout 1 example</h3>
        <Layout>
          <Slider><SliderContent>This is a slider</SliderContent></Slider>
          <Layout>
            <Header><HeaderContent>This is a header</HeaderContent></Header>
            <Content><ContentContent>This is a content</ContentContent></Content>
            <Footer><FooterContent>This is a footer</FooterContent></Footer>
          </Layout>
        </Layout>
        <h3>Layout 2 example</h3>
        <Layout>
          <Header><HeaderContent>This is a header</HeaderContent></Header>
          <Content><ContentContent>This is a content</ContentContent></Content>
          <Footer><FooterContent>This is a footer</FooterContent></Footer>
        </Layout>
        <h3>Layout 3 example</h3>
        <Layout>
          <Layout>
            <Slider><SliderContent>This is a slider left</SliderContent></Slider>
            <Content><ContentContent>This is a content</ContentContent></Content>
            <Slider><SliderContent>This is a slider right</SliderContent></Slider>
          </Layout>
          <Header><HeaderContent>This is a header</HeaderContent></Header>
          <Content><ContentContent>This is a content</ContentContent></Content>
          <Footer><FooterContent>This is a footer</FooterContent></Footer>
        </Layout>
        <h3>Layout 4 example</h3>
        <Layout>
          <Layout>
            <Slider><SliderContent>This is a slider left</SliderContent></Slider>
            <Content><ContentContent>This is a content</ContentContent></Content>
            <Slider><SliderContent>This is a slider right</SliderContent></Slider>
          </Layout>
          <Layout>
            <Header><HeaderContent>This is a header</HeaderContent></Header>
            <Content><ContentContent>This is a content</ContentContent></Content>
            <Footer><FooterContent>This is a footer</FooterContent></Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

storiesOf('Juggle Components', module)
  .add('LayoutStory', () => (<LayoutStory />));
