//  use state to populate the profile details
//   );
// }
//
// This snippet is from pages/account/settings.tsx:

import { Schema, model, Document, Types } from 'mongoose';
import { rowStyle } from '../../styles/common';
import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material';
import { GetStaticPropsContext, NextPage } from 'next';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from '../../components/common/Link';
import AboutYouDemographicForm from '../../components/forms/AboutYouDemographicForm';
import AboutYouSetAForm from '../../components/forms/AboutYouSetAForm';
import PartnerHeader from '../../components/layout/PartnerHeader';
import { SURVEY_FORMS } from '../../constants/enums';
import { ABOUT_YOU_VIEWED, SIGNUP_SURVEY_SKIPPED } from '../../constants/events';
import { useTypedSelector } from '../../hooks/store';
import illustrationBloomHeadYellow from '../../public/illustration_bloom_head_yellow.svg';
import welcomeToBloom from '../../public/welcome_to_bloom.svg';
import { rowStyle } from '../../styles/common';
import logEvent, { getEventUserData } from '../../utils/logEvent';


const containerStyle = {
	...rowStyle,
	backgroundColor: 'primary.light',
	justifyContent: 'center',
	paddingTop: '4rem !important',
} as const;

const contentContainerStyle = {
	maxWidth: 600,
	textAlign: 'center',
} as const;

const formContainerStyle = {
	marginTop: 5,
	textAlign: 'left',
} as const;

