import React from 'react';
import { Flex, Grid, Text } from '@chakra-ui/react';
import { FcAnswers } from 'react-icons/fc';

function EmptyNotes() {
	return (
		<Grid placeItems="center" height="90vh">
			<Flex direction="column" alignItems="center">
				<FcAnswers size="120" />
				<Text>No Notes Found</Text>
			</Flex>
		</Grid>
	);
}

export default EmptyNotes;
