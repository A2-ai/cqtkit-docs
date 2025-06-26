// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { starlightKatex } from "starlight-katex";
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
	site: "https://probable-bassoon-8jv79jz.pages.github.io/",
	base: "/cqtkit-docs",
	markdown: {
		rehypePlugins: [
		  rehypeSlug,
		  [
			rehypeAutolinkHeadings,
			{
			  behavior: 'append',
			  content: {
				type: 'element',
				tagName: 'svg',
				properties: { 
				  className: ['heading-anchor'],
				  style: 'display: inline-block; margin-left: 0.5rem;',
				  viewBox: '0 0 16 16',
				  width: 16,
				  height: 16
				},
				children: [{
				  type: 'element',
				  tagName: 'path',
				  properties: {
					fill: 'currentColor',
					d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'
				  }
				}]
			  },
			},
		  ],
		],
	  },
	integrations: [
		starlight({
			plugins: [starlightKatex()],
			customCss: [
				'./src/styles/custom.css'
			],
			title: 'cqtkit',
			social: [
				{
					icon: 'github',
					href: 'https://github.com/a2-ai-tech-training/cqtkit-docs',
					label: 'GitHub repo',
				},
			],
			components: {
				SocialIcons: './src/components/VersionSelect.astro'
			},
			sidebar: [
				{
					label: 'Reference',
					items: [
						{ label: "cqtkit's Reference", slug: 'reference/cqtkit' },
						// These will all be folders
						{ 
							label: 'Preprocessing', 
							collapsed: true,
							items: 
								[
									'reference/preprocessing/preprocessing',
									'reference/preprocessing/compute_qtcf',
									'reference/preprocessing/compute_qtcfblm',
									'reference/preprocessing/compute_qtcb',
									'reference/preprocessing/compute_qtcbblm',
									'reference/preprocessing/compute_deltas',	
									'reference/preprocessing/preprocess',
								],
						},
						{ 
							label: 'Exploratory Data Analysis', 
							collapsed: true,
							items: 
								[
									'reference/eda/eda',
									'reference/eda/eda_mean_dv_over_time',
									'reference/eda/eda_qtc_comparison_plot',
									'reference/eda/eda_hysteresis_loop_plot',
									'reference/eda/eda_scatter_with_regressions',
									'reference/eda/eda_quantiles_plot',
									'reference/eda/eda_qt_rr_plot',
								],
						},
						{ 
							label: 'Compute', 
							collapsed: true,
							items: [
								'reference/compute/compute',
								'reference/compute/compute_grouped_mean_sd',
								'reference/compute/compute_pk_parameters',
								'reference/compute/compute_ecg_param_summary',
								'reference/compute/compute_high_qtc_sub',
								'reference/compute/compute_quantiles_obs_df',
								'reference/compute/compute_potential_hysteresis',
								'reference/compute/compute_hysteresis_labeller',
								'reference/compute/compute_exposure_predictions',
								'reference/compute/compute_dataset_simulation',
								'reference/compute/compute_summary_statistics_of_simulations',
								'reference/compute/compute_lm_fit_df',
								'reference/compute/compute_lme_slope_df',
								'reference/compute/compute_engri',
							],  
						},
						{ 
							label: 'Tabulate', 
							collapsed: true,
							items: [
								'reference/tabulate/tabulate',
								'reference/tabulate/tabulate_ecg_param_summary',
								'reference/tabulate/tabulate_high_qtc_sub',
								'reference/tabulate/tabulate_pk_parameters',
								'reference/tabulate/tabulate_model_fit_parameters',
								'reference/tabulate/tabulate_exposure_predictions',
							],
						},
						{
							label: 'Fit',
							collapsed: true,
							items: [
								'reference/fit/fit',
								'reference/fit/fit_prespecified_model',
								'reference/fit/fit_qtc_linear_model',
								'reference/fit/compute_model_fit_parameters',
								'reference/fit/compute_fit_results',
							],
						},
						{ 
							label: 'Goodness of Fit', 
							collapsed: true,
							items: [
								'reference/gof/gof',
								'reference/gof/gof_plots',
								'reference/gof/gof_concordance_plots',
								'reference/gof/gof_residuals_plots',
								'reference/gof/gof_qq_plots',
								'reference/gof/gof_residuals_time_boxplots',
								'reference/gof/gof_residuals_trt_boxplots',
								'reference/gof/gof_vpc_plot'
							],
						},
						{ 
							label: 'Prediction', 
							collapsed: true,
							items: [
								'reference/predict/predict',
								'reference/predict/predict_with_observations_plot',
								'reference/predict/predict_with_quantiles_plot',
								'reference/predict/predict_with_exposure_plot',
							],
						},
					],
				},
				//{
				//	label: 'Guides',
				//	items: [
						// Each item here is one entry in the navigation menu.
				//		{ label: 'Example Guide', slug: 'guides/example' },
				//	],
				//},
			],
		}),
	],
})
