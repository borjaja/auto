import '@fontsource/roboto';
import { Button } from '@material-ui/core';
import React from 'react';
import Layout from '../components/layout';

const RootIndex = (props) => {
  return (
    <Layout location={props.location}>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Layout>
  );
};

export default RootIndex;
