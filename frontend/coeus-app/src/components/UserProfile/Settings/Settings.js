/* eslint-disable max-len */

import React from 'react'
import { Container, Header, Icon, Form, Input } from 'semantic-ui-react'

const ContainerExampleText = () => (
<>
    <Container text textAlign='center'>
    <Header as='h2' icon>
        <Icon name='settings' />
        Account Settings
        <Header.Subheader>
        Manage your account settings and preferences.
        </Header.Subheader>
        <Form>
        <Form.Field inline>
        <label>First name</label>
        <Input placeholder='First name' />
        </Form.Field>
        <Form.Field inline>
        <label>Last name</label>
        <Input placeholder='Last name' />
        </Form.Field>
        <Form.Field inline>
        <label>Email </label>
        <Input placeholder='Email Address' />
        </Form.Field>

        <Form.Field inline>
        <label>Change Password  </label>
        <Input placeholder='Password' />
        </Form.Field>
        </Form>
    </Header>

    </Container>
</>
)

export default ContainerExampleText