// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { starlightKatex } from "starlight-katex";

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE || "http://localhost",
  base: process.env.ASTRO_BASE || "/",
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "cqtkit",
      customCss: ["./src/styles/custom.css"],
      plugins: [starlightKatex()],
      components: { SiteTitle: "./src/components/VersionSelect.astro" },
      logo: { src: "./src/assets/logo.png", alt: "Logo" },
      favicon: "/images/favicon.png",
      
      sidebar: [
    {
      label: "Reference",
      items: [
        { label: "cqtkit", slug: "reference/cqtkit" },
        {
          label: "Preprocessing",
          collapsed: true,
          items: [
            { label: "preprocessing", slug: "reference/preprocessing" },
            { label: "compute_qtcb_qtcf", slug: "reference/compute_qtcb_qtcf" },
            { label: "compute_delta_qtcfblm", slug: "reference/compute_delta_qtcfblm" },
            { label: "compute_delta_qtcbblm", slug: "reference/compute_delta_qtcbblm" },
            { label: "compute_delta_hrblm", slug: "reference/compute_delta_hrblm" },
            { label: "compute_deltas", slug: "reference/compute_deltas" },
            { label: "preprocess", slug: "reference/preprocess" }
          ]
        },
        {
          label: "Exploratory Data Analysis",
          collapsed: true,
          items: [
            { label: "eda", slug: "reference/eda" },
            { label: "eda_mean_dv_over_time", slug: "reference/eda_mean_dv_over_time" },
            { label: "eda_qtc_comparison_plot", slug: "reference/eda_qtc_comparison_plot" },
            { label: "eda_hysteresis_loop_plot", slug: "reference/eda_hysteresis_loop_plot" },
            { label: "eda_scatter_with_regressions", slug: "reference/eda_scatter_with_regressions" },
            { label: "eda_quantiles_plot", slug: "reference/eda_quantiles_plot" },
            { label: "eda_qt_rr_plot", slug: "reference/eda_qt_rr_plot" }
          ]
        },
        {
          label: "Compute",
          collapsed: true,
          items: [
            { label: "compute", slug: "reference/compute" },
            { label: "compute_grouped_mean_sd", slug: "reference/compute_grouped_mean_sd" },
            { label: "compute_pk_parameters", slug: "reference/compute_pk_parameters" },
            { label: "compute_ecg_param_summary", slug: "reference/compute_ecg_param_summary" },
            { label: "compute_high_qtc_sub", slug: "reference/compute_high_qtc_sub" },
            { label: "compute_study_summary", slug: "reference/compute_study_summary" },
            { label: "compute_quantiles_obs_df", slug: "reference/compute_quantiles_obs_df" },
            { label: "compute_potential_hysteresis", slug: "reference/compute_potential_hysteresis" },
            { label: "compute_hysteresis_labeller", slug: "reference/compute_hysteresis_labeller" },
            { label: "compute_contrast_observations", slug: "reference/compute_contrast_observations" },
            { label: "compute_exposure_predictions", slug: "reference/compute_exposure_predictions" },
            { label: "compute_conc_for_upper_pred", slug: "reference/compute_conc_for_upper_pred" },
            { label: "compute_dataset_simulation", slug: "reference/compute_dataset_simulation" },
            { label: "compute_summary_statistics_of_simulations", slug: "reference/compute_summary_statistics_of_simulations" },
            { label: "compute_lm_fit_df", slug: "reference/compute_lm_fit_df" },
            { label: "compute_lme_slope_df", slug: "reference/compute_lme_slope_df" },
            { label: "compute_enGRI", slug: "reference/compute_engri" },
            { label: "compute_loess_linear_r_squared", slug: "reference/compute_loess_linear_r_squared" }
          ]
        },
        {
          label: "Tabulate",
          collapsed: true,
          items: [
            { label: "tabulate", slug: "reference/tabulate" },
            { label: "tabulate_study_summary", slug: "reference/tabulate_study_summary" },
            { label: "tabulate_ecg_param_summary", slug: "reference/tabulate_ecg_param_summary" },
            { label: "tabulate_high_qtc_sub", slug: "reference/tabulate_high_qtc_sub" },
            { label: "tabulate_pk_parameters", slug: "reference/tabulate_pk_parameters" },
            { label: "tabulate_model_fit_parameters", slug: "reference/tabulate_model_fit_parameters" },
            { label: "tabulate_exposure_predictions", slug: "reference/tabulate_exposure_predictions" }
          ]
        },
        {
          label: "Fit",
          collapsed: true,
          items: [
            { label: "fit", slug: "reference/fit" },
            { label: "fit_prespecified_model", slug: "reference/fit_prespecified_model" },
            { label: "fit_qtc_linear_model", slug: "reference/fit_qtc_linear_model" },
            { label: "compute_model_fit_parameters", slug: "reference/compute_model_fit_parameters" },
            { label: "compute_fit_results", slug: "reference/compute_fit_results" }
          ]
        },
        {
          label: "Goodness of Fit",
          collapsed: true,
          items: [
            { label: "gof", slug: "reference/gof" },
            { label: "gof_plots", slug: "reference/gof_plots" },
            { label: "gof_concordance_plots", slug: "reference/gof_concordance_plots" },
            { label: "gof_residuals_plots", slug: "reference/gof_residuals_plots" },
            { label: "gof_qq_plots", slug: "reference/gof_qq_plots" },
            { label: "gof_residuals_time_boxplots", slug: "reference/gof_residuals_time_boxplots" },
            { label: "gof_residuals_trt_boxplots", slug: "reference/gof_residuals_trt_boxplots" },
            { label: "gof_vpc_plot", slug: "reference/gof_vpc_plot" }
          ]
        },
        {
          label: "Prediction",
          collapsed: true,
          items: [
            { label: "predict", slug: "reference/predict" },
            { label: "predict_with_observations_plot", slug: "reference/predict_with_observations_plot" },
            { label: "predict_with_quantiles_plot", slug: "reference/predict_with_quantiles_plot" },
            { label: "predict_with_exposure_plot", slug: "reference/predict_with_exposure_plot" }
          ]
        },
        {
          label: "Style",
          collapsed: true,
          items: [
            { label: "style", slug: "reference/style" },
            { label: "add_horizontal_references", slug: "reference/add_horizontal_references" },
            { label: "set_style", slug: "reference/set_style" },
            { label: "style_plot", slug: "reference/style_plot" }
          ]
        },
        {
          label: "Datasets",
          collapsed: true,
          items: [
            { label: "datasets", slug: "reference/datasets" },
            { label: "cqtkit_data_verapamil", slug: "reference/cqtkit_data_verapamil" },
            { label: "cqtkit_data_bl_verapamil", slug: "reference/cqtkit_data_bl_verapamil" },
            { label: "cqtkit_data_dofetilide", slug: "reference/cqtkit_data_dofetilide" },
            { label: "cqtkit_data_bl_dofetilide", slug: "reference/cqtkit_data_bl_dofetilide" },
            { label: "cqtkit_data_quinidine", slug: "reference/cqtkit_data_quinidine" },
            { label: "cqtkit_data_bl_quinidine", slug: "reference/cqtkit_data_bl_quinidine" },
            { label: "cqtkit_data_ranolazine", slug: "reference/cqtkit_data_ranolazine" },
            { label: "cqtkit_data_bl_ranolazine", slug: "reference/cqtkit_data_bl_ranolazine" }
          ]
        }
      ]
    },
    { label: "Changelog", slug: "news" }
  ]
    })
  ]
});

