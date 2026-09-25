import { useState } from 'react';
import { CSSProperties } from 'react';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from './../../constants/articleProps';

import styles from './app.module.scss';

export const App = () => {
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);

	const handleApply = (newState: ArticleStateType) => {
		setArticleState(newState);
	};

	const handleReset = () => {
		setArticleState(defaultArticleState);
	};

	const cssVariables: CSSProperties = {
		'--font-family': articleState.fontFamilyOption.value,
		'--font-color': articleState.fontColor.value,
		'--bg-color': articleState.backgroundColor.value,
		'--container-width': articleState.contentWidth.value,
		'--font-size': articleState.fontSizeOption.value,
	} as React.CSSProperties;

	return (
		<main className={styles.main} style={cssVariables}>
			<ArticleParamsForm
				initialState={defaultArticleState}
				currentState={articleState}
				onApply={handleApply}
				onReset={handleReset}
			/>
			<Article />
		</main>
	);
};
