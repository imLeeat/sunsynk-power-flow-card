// solar-elements.ts
import { html, svg } from 'lit';
import { localize } from '../../../localize/localize';
import { Utils } from '../../../helpers/utils';
import { DataDto, sunsynkPowerFlowCardConfig } from '../../../types';
import {
	UnitOfElectricalCurrent,
	UnitOfElectricPotential,
	UnitOfPower,
} from '../../../const';
import { icons } from '../../../helpers/icons';
import { renderPV } from '../../shared/pv/render-pv';
import { renderPVFlow } from '../../shared/pv/render-pv-flow';
import { createTextWithPopup, renderText } from '../../../helpers/text-utils';

export const renderSolarElements = (
	data: DataDto,
	config: sunsynkPowerFlowCardConfig,
) => {
	const {
		solarColour,
		decimalPlaces,
		totalPV,
		minLineWidth,
		solarShowDaily,
		largeFont,
		durationCur,
	} = data;

	const { auto_scale, efficiency, mppts, display_mode, invert_flow } =
		config.solar;

	return html`
		<!-- Solar Elements -->
		<svg
			id="Solar"
			style="overflow: visible; display: ${!config.show_solar
				? 'none'
				: 'inline'};"
			x="3%"
			y="2.5%"
		>
			${renderPV('pvtotal', '177', '230', data, config)}
			${renderPV('pv1', '000', '040', data, config)}
			${renderPV('pv2', '101', '040', data, config)}
			${renderPV('pv3', '000', '085', data, config)}
			${renderPV('pv4', '101', '085', data, config)}
			${renderPV('pv5', '000', '130', data, config)}
			${renderPV('pv6', '101', '130', data, config)}
			${renderPV('pv7', '000', '175', data, config)}
			${renderPV('pv8', '101', '175', data, config)}
			${renderText(
				'pv1_name',
				0,
				78.5,
				!config.show_solar,
				'st3 st8 left-align',
				solarColour,
				config.solar.pv1_name || localize('common.pv1_name'),
				true,
			)}
			${renderText(
				'pv1_efficiency',
				72,
				78.5,
				[0, 1].includes(efficiency),
				[2, 3].includes(efficiency) ? 'st3 st8 right-align' : 'st12',
				solarColour,
				`${data.PV1Efficiency}%`,
				true,
			)}
			${renderText(
				'pv2_name',
				99,
				78.5,
				mppts === 1,
				'st3 st8 left-align',
				solarColour,
				config.solar.pv2_name || localize('common.pv2_name'),
				true,
			)}
			${renderText(
				'pv2_efficiency',
				171,
				78.5,
				mppts === 1 || [0, 1].includes(efficiency),
				[2, 3].includes(efficiency) ? 'st3 st8 right-align' : 'st12',
				solarColour,
				`${data.PV2Efficiency}%`,
				true,
			)}
			${renderText(
				'pv3_name',
				0,
				123.5,
				[1, 2].includes(mppts),
				'st3 st8 left-align',
				solarColour,
				config.solar.pv3_name || localize('common.pv3_name'),
				true,
			)}
			${renderText(
				'pv3_efficiency',
				72,
				123.5,
				[1, 2].includes(mppts) || [0, 1].includes(efficiency),
				[2, 3].includes(efficiency) ? 'st3 st8 right-align' : 'st12',
				solarColour,
				`${data.PV3Efficiency}%`,
				true,
			)}
			${renderText(
				'pv4_name',
				99,
				123.5,
				[1, 2, 3].includes(mppts),
				'st3 st8 left-align',
				solarColour,
				config.solar.pv4_name || localize('common.pv4_name'),
				true,
			)}
			${renderText(
				'pv4_efficiency',
				171,
				123.5,
				[1, 2, 3].includes(mppts) || [0, 1].includes(efficiency),
				[2, 3].includes(efficiency) ? 'st3 st8 right-align' : 'st12',
				solarColour,
				`${data.PV4Efficiency}%`,
				true,
			)}
			${renderText(
				'pv5_name',
				0,
				168.5,
				[1, 2, 3].includes(mppts),
				'st3 st8 left-align',
				solarColour,
				config.solar.pv5_name || localize('common.pv5_name'),
				true,
			)}
			${renderText(
				'pv5_efficiency',
				72,
				168.5,
				[1, 2, 3].includes(mppts) || [0, 1].includes(efficiency),
				[2, 3].includes(efficiency) ? 'st3 st8 right-align' : 'st12',
				solarColour,
				`${data.PV5Efficiency}%`,
				true,
			)}
			${renderText(
				'pv6_name',
				99,
				168.5,
				[1, 2, 3].includes(mppts),
				'st3 st8 left-align',
				solarColour,
				config.solar.pv6_name || localize('common.pv6_name'),
				true,
			)}
			${renderText(
				'pv6_efficiency',
				171,
				168.5,
				[1, 2, 3].includes(mppts) || [0, 1].includes(efficiency),
				[2, 3].includes(efficiency) ? 'st3 st8 right-align' : 'st12',
				solarColour,
				`${data.PV6Efficiency}%`,
				true,
			)}
			${renderText(
				'pv7_name',
				0,
				213.5,
				[1, 2, 3, 4].includes(mppts),
				'st3 st8 left-align',
				solarColour,
				config.solar.pv7_name || localize('common.pv7_name'),
				true,
			)}
			${renderText(
				'pv7_efficiency',
				72,
				213.5,
				[1, 2, 3, 4].includes(mppts) || [0, 1].includes(efficiency),
				[2, 3].includes(efficiency) ? 'st3 st8 right-align' : 'st12',
				solarColour,
				`${data.PV7Efficiency}%`,
				true,
			)}
			${renderText(
				'pv8_name',
				99,
				213.5,
				[1, 2, 3, 4].includes(mppts),
				'st3 st8 left-align',
				solarColour,
				config.solar.pv8_name || localize('common.pv8_name'),
				true,
			)}
			${renderText(
				'pv8_efficiency',
				171,
				213.5,
				[1, 2, 3, 4].includes(mppts) || [0, 1].includes(efficiency),
				[2, 3].includes(efficiency) ? 'st3 st8 right-align' : 'st12',
				solarColour,
				`${data.PV8Efficiency}%`,
				true,
			)}
			${renderText(
				'total_pv_efficiency',
				247,
				268.5,
				[0, 1].includes(efficiency) || mppts === 1,
				[2, 3].includes(efficiency) ? 'st3 st8 right-align' : 'st12',
				solarColour,
				`${data.totalPVEfficiency}%`,
				true,
			)}
			${renderText(
				'daily_solar',
				43.5,
				29,
				display_mode === 1,
				'st3 left-align',
				!solarShowDaily ? 'transparent' : solarColour,
				config.solar.custom_label || localize('common.daily_solar'),
				false,
			)}
			${renderText(
				'remaining_solar',
				43.5,
				29,
				display_mode === 2,
				'st3 left-align',
				!solarShowDaily ? 'transparent' : solarColour,
				config.solar.custom_label || localize('common.daily_solar_left'),
				false,
			)}
			${renderText(
				'total_solar_generation',
				43.5,
				29,
				display_mode === 3,
				'st3 left-align',
				!solarShowDaily ? 'transparent' : solarColour,
				config.solar.custom_label || localize('common.total_solar_generation'),
				false,
			)}
			${renderPVFlow(
				'pv1',
				mppts === 1
					? config.wide
						? 'M 86 175 M 278 250 L 96 250 Q 86 250 86 240 L 86 56 H 70'
						: 'M 86 175 M 155 250 L 96 250 Q 86 250 86 240 L 86 56 H 70'
					: 'M 86 212 L 86 56 Q 86 56 86 56 L 70 56',
				solarColour,
				data.pv1LineWidth,
				data.pv1PowerWatts,
				durationCur['pv1'],
				invert_flow,
				minLineWidth,
				'',
				'1;0',
			)}
			${renderPVFlow(
				'pv2',
				'M 86 212 L 86 56 Q 86 56 86 56 L 101 56',
				solarColour,
				data.pv2LineWidth,
				data.pv2PowerWatts,
				durationCur['pv2'],
				invert_flow,
				minLineWidth,
				mppts === 1 ? 'st12' : '',
				'1;0',
			)}
			${renderPVFlow(
				'pv3',
				'M 86 212 L 86 101 Q 86 101 86 101 L 70 101',
				solarColour,
				data.pv3LineWidth,
				data.pv3PowerWatts,
				durationCur['pv3'],
				invert_flow,
				minLineWidth,
				[1, 2].includes(mppts) ? 'st12' : '',
				'1;0',
			)}
			${renderPVFlow(
				'pv4',
				'M 86 212 L 86 101 Q 86 101 86 101 L 101 101',
				solarColour,
				data.pv4LineWidth,
				data.pv4PowerWatts,
				durationCur['pv4'],
				invert_flow,
				minLineWidth,
				[1, 2, 3].includes(mppts) ? 'st12' : '',
				'1;0',
			)}
			${renderPVFlow(
				'pv5',
				'M 86 212 L 86 146 Q 86 146 86 146 L 70 146',
				solarColour,
				data.pv5LineWidth,
				data.pv5PowerWatts,
				durationCur['pv5'],
				invert_flow,
				minLineWidth,
				[1, 2, 3].includes(mppts) ? 'st12' : '',
				'1;0',
			)}
			${renderPVFlow(
				'pv6',
				'M 86 212 L 86 146 Q 86 146 86 146 L 101 146',
				solarColour,
				data.pv6LineWidth,
				data.pv6PowerWatts,
				durationCur['pv6'],
				invert_flow,
				minLineWidth,
				[1, 2, 3].includes(mppts) ? 'st12' : '',
				'1;0',
			)}
			${renderPVFlow(
				'pv7',
				'M 86 212 L 86 191 Q 86 191 86 191 L 70 191',
				solarColour,
				data.pv7LineWidth,
				data.pv7PowerWatts,
				durationCur['pv7'],
				invert_flow,
				minLineWidth,
				[1, 2, 3].includes(mppts) ? 'st12' : '',
				'1;0',
			)}
			${renderPVFlow(
				'pv8',
				'M 86 212 L 86 191 Q 86 191 86 191 L 101 191',
				solarColour,
				data.pv8LineWidth,
				data.pv8PowerWatts,
				durationCur['pv8'],
				invert_flow,
				minLineWidth,
				[1, 2, 3].includes(mppts) ? 'st12' : '',
				'1;0',
			)}
			${renderPVFlow(
				'solar1',
				config.wide
					? 'M 178 245 L 96 245 Q 86 245 86 240 L 86 212'
					: 'M 155 250 L 96 250 Q 86 250 86 240 L 86 212',
				solarColour,
				data.solarLineWidth,
				totalPV,
				durationCur['solar'],
				invert_flow,
				minLineWidth,
				mppts === 1 ? 'st12' : '',
				'1;0',
			)}
			${renderPVFlow(
				'solar2',
				config.wide
					? 'M 278 245 L 248 245'
					: 'M 155 250 L 96 250 Q 86 250 86 240 L 86 212',
				solarColour,
				data.solarLineWidth,
				totalPV,
				durationCur['solar' + 0.5],
				invert_flow,
				minLineWidth,
				mppts === 1 ? 'st12' : '',
				'1;0',
			)}
			${config.solar?.navigate
				? svg`
                    <a href="#" @click=${(e) => Utils.handleNavigation(e, config.solar.navigate)}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="sun" x="0" y="-0.5" width="40" height="40"
                            viewBox="0 0 24 24">
                            <path fill="${solarColour}"
                                d="${icons.sun}"/>
                        </svg>
                    </a>`
				: svg`
                    <svg xmlns="http://www.w3.org/2000/svg" id="sun" x="0" y="-0.5" width="40" height="40"
                        viewBox="0 0 24 24">
                        <path fill="${solarColour}"
                            d="${icons.sun}"/>
                    </svg>`}
			<a
				href="#"
				@click=${(e) => Utils.handlePopup(e, config.entities.solar_sell_247)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					id="solar_sell_on"
					x="96"
					y="197"
					width="18"
					height="18"
					viewBox="0 0 30 30"
				>
					<path
						display="${!config.entities.solar_sell_247 ||
						config.entities.solar_sell_247 === 'none' ||
						data.stateSolarSell.state === 'off' ||
						data.stateSolarSell.state === '0' ||
						!['1', 'on'].includes(data.stateSolarSell.state)
							? 'none'
							: ''}"
						fill="${solarColour}"
						d="${icons.solarSellOn}"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					id="solar_sell_off"
					x="96"
					y="197"
					width="18"
					height="18"
					viewBox="0 0 30 30"
				>
					<path
						display="${!config.entities.solar_sell_247 ||
						config.entities.solar_sell_247 === 'none' ||
						data.stateSolarSell.state === 'on' ||
						data.stateSolarSell.state === '1' ||
						!['0', 'off'].includes(data.stateSolarSell.state)
							? 'none'
							: ''}"
						fill="${solarColour}"
						d="${icons.solarSellOff}"
					/>
				</svg>
			</a>
			${createTextWithPopup(
				'daily_solar_value',
				43.5,
				15,
				display_mode === 1 && data.stateDayPVEnergy.isValid(),
				'st10 left-align',
				!solarShowDaily ? 'transparent' : solarColour,
				data.stateDayPVEnergy.toPowerString(true, data.decimalPlacesEnergy),
				(e) => Utils.handlePopup(e, config.entities.day_pv_energy_108),
			)}
			${createTextWithPopup(
				'remaining_solar_value',
				43.5,
				15,
				display_mode === 2 && data.stateDayPVEnergy.isValid(),
				'st10 left-align',
				!solarShowDaily ? 'transparent' : solarColour,
				`${data.stateDayPVEnergy.toPowerString(true, data.decimalPlacesEnergy)} / ${data.remainingSolar}`,
				(e) => Utils.handlePopup(e, config.entities.day_pv_energy_108),
			)}
			${createTextWithPopup(
				'total_solar_value',
				43.5,
				15,
				display_mode === 3 && data.stateDayPVEnergy.isValid(),
				'st10 left-align',
				!solarShowDaily ? 'transparent' : solarColour,
				`${data.stateDayPVEnergy.toPowerString(true, data.decimalPlacesEnergy)} / ${data.totalSolarGeneration}`,
				(e) => Utils.handlePopup(e, config.entities.day_pv_energy_108),
			)}
			${config.entities?.pv_total
				? svg`
                    ${createTextWithPopup(
											'pvtotal_power',
											213,
											246.5,
											mppts === 1 || !data.statePVTotal.isValid(),
											`${largeFont !== true ? 'st14' : 'st4'} st8`,
											solarColour,
											auto_scale
												? config.entities?.pv_total
													? `${Utils.convertValueNew(totalPV, data.statePVTotal?.getUOM(), decimalPlaces)}`
													: `${Utils.convertValue(totalPV, decimalPlaces) || 0}`
												: `${Utils.toNum(totalPV || 0, 0)} ${UnitOfPower.WATT}`,
											(e) => Utils.handlePopup(e, config.entities.pv_total),
											true,
										)}`
				: svg`
                    ${renderText(
											'pvtotal_power',
											223,
											256.5,
											mppts === 1 || !data.statePVTotal.isValid(),
											`${largeFont !== true ? 'st14' : 'st4'} st8`,
											solarColour,
											auto_scale
												? config.entities?.pv_total
													? `${Utils.convertValueNew(totalPV, data.statePVTotal?.getUOM(), decimalPlaces)}`
													: `${Utils.convertValue(totalPV, decimalPlaces) || 0}`
												: `${Utils.toNum(totalPV || 0, 0)} ${UnitOfPower.WATT}`,
											true,
										)}`}
			${createTextWithPopup(
				'pv1_power_186',
				36.5,
				56.5,
				!data.statePV1Power.isValid(),
				`${largeFont !== true ? 'st14' : 'st4'} st8`,
				solarColour,
				auto_scale
					? `${Utils.convertValue(data.pv1PowerWatts, decimalPlaces) || 0}`
					: `${Utils.toNum(data.pv1PowerWatts || 0, 0)} ${UnitOfPower.WATT}`,
				(e) => Utils.handlePopup(e, config.entities.pv1_power_186),
				true,
			)}
			${createTextWithPopup(
				'pv2_power_187',
				137,
				56.5,
				mppts === 1 || !data.statePV2Power.isValid(),
				`${largeFont !== true ? 'st14' : 'st4'} st8`,
				solarColour,
				auto_scale
					? `${Utils.convertValue(data.pv2PowerWatts, decimalPlaces) || 0}`
					: `${Utils.toNum(data.pv2PowerWatts || 0, 0)} ${UnitOfPower.WATT}`,
				(e) => Utils.handlePopup(e, config.entities.pv2_power_187),
				true,
			)}
			${createTextWithPopup(
				'pv3_power_188',
				36.5,
				101.5,
				[1, 2].includes(mppts) || !data.statePV3Power.isValid(),
				`${largeFont !== true ? 'st14' : 'st4'} st8`,
				solarColour,
				auto_scale
					? `${Utils.convertValue(data.pv3PowerWatts, decimalPlaces) || 0}`
					: `${Utils.toNum(data.pv3PowerWatts || 0, 0)} ${UnitOfPower.WATT}`,
				(e) => Utils.handlePopup(e, config.entities.pv3_power_188),
				true,
			)}
			${createTextWithPopup(
				'pv4_power_189',
				137,
				101.5,
				[1, 2, 3].includes(mppts) || !data.statePV4Power.isValid(),
				`${largeFont !== true ? 'st14' : 'st4'} st8`,
				solarColour,
				auto_scale
					? `${Utils.convertValue(data.pv4PowerWatts, decimalPlaces) || 0}`
					: `${Utils.toNum(data.pv4PowerWatts || 0, 0)} ${UnitOfPower.WATT}`,
				(e) => Utils.handlePopup(e, config.entities.pv4_power_189),
				true,
			)}
			${createTextWithPopup(
				'pv5_power',
				36.5,
				146.5,
				[1, 2, 3].includes(mppts) || !data.statePV5Power.isValid(),
				`${largeFont !== true ? 'st14' : 'st4'} st8`,
				solarColour,
				auto_scale
					? `${Utils.convertValue(data.pv5PowerWatts, decimalPlaces) || 0}`
					: `${Utils.toNum(data.pv5PowerWatts || 0, 0)} ${UnitOfPower.WATT}`,
				(e) => Utils.handlePopup(e, config.entities.pv5_power),
				true,
			)}
			${createTextWithPopup(
				'pv6_power',
				137,
				146.5,
				[1, 2, 3].includes(mppts) || !data.statePV6Power.isValid(),
				`${largeFont !== true ? 'st14' : 'st4'} st8`,
				solarColour,
				auto_scale
					? `${Utils.convertValue(data.pv6PowerWatts, decimalPlaces) || 0}`
					: `${Utils.toNum(data.pv6PowerWatts || 0, 0)} ${UnitOfPower.WATT}`,
				(e) => Utils.handlePopup(e, config.entities.pv6_power),
				true,
			)}
			${createTextWithPopup(
				'pv7_power',
				36.5,
				191.5,
				[1, 2, 3].includes(mppts) || !data.statePV7Power.isValid(),
				`${largeFont !== true ? 'st14' : 'st4'} st8`,
				solarColour,
				auto_scale
					? `${Utils.convertValue(data.pv7PowerWatts, decimalPlaces) || 0}`
					: `${Utils.toNum(data.pv7PowerWatts || 0, 0)} ${UnitOfPower.WATT}`,
				(e) => Utils.handlePopup(e, config.entities.pv7_power),
				true,
			)}
			${createTextWithPopup(
				'pv8_power',
				137,
				191.5,
				[1, 2, 3].includes(mppts) || !data.statePV8Power.isValid(),
				`${largeFont !== true ? 'st14' : 'st4'} st8`,
				solarColour,
				auto_scale
					? `${Utils.convertValue(data.pv8PowerWatts, decimalPlaces) || 0}`
					: `${Utils.toNum(data.pv8PowerWatts || 0, 0)} ${UnitOfPower.WATT}`,
				(e) => Utils.handlePopup(e, config.entities.pv8_power),
				true,
			)}
			${createTextWithPopup(
				'pv1_voltage',
				41,
				78.5,
				!config.entities.pv1_voltage_109 ||
					config.entities.pv1_voltage_109 === 'none' ||
					!data.statePV1Voltage.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV1Voltage.toNum(1),
					1,
				)} ${UnitOfElectricPotential.VOLT}`,
				(e) => Utils.handlePopup(e, config.entities.pv1_voltage_109),
				true,
			)}
			${createTextWithPopup(
				'pv1_current',
				41,
				90,
				!config.entities.pv1_current_110 ||
					config.entities.pv1_current_110 === 'none' ||
					!data.statePV1Current.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV1Current.toNum(1),
					1,
				)} ${UnitOfElectricalCurrent.AMPERE}`,
				(e) => Utils.handlePopup(e, config.entities.pv1_current_110),
				true,
			)}
			${createTextWithPopup(
				'pv2_voltage',
				142,
				78.5,
				!config.entities.pv2_voltage_111 ||
					config.entities.pv2_voltage_111 === 'none' ||
					mppts === 1 ||
					!data.statePV2Voltage.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV2Voltage.toNum(1),
					1,
				)} ${UnitOfElectricPotential.VOLT}`,
				(e) => Utils.handlePopup(e, config.entities.pv2_voltage_111),
				true,
			)}
			${createTextWithPopup(
				'pv2_current',
				142,
				90,
				!config.entities.pv2_current_112 ||
					config.entities.pv2_current_112 === 'none' ||
					mppts === 1 ||
					!data.statePV2Current.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV2Current.toNum(1),
					1,
				)} ${UnitOfElectricalCurrent.AMPERE}`,
				(e) => Utils.handlePopup(e, config.entities.pv2_current_112),
				true,
			)}
			${createTextWithPopup(
				'pv3_voltage',
				41,
				139,
				!config.entities.pv3_voltage_113 ||
					config.entities.pv3_voltage_113 === 'none' ||
					[1, 2].includes(mppts) ||
					!data.statePV3Voltage.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV3Voltage.toNum(1),
					1,
				)} ${UnitOfElectricPotential.VOLT}`,
				(e) => Utils.handlePopup(e, config.entities.pv3_voltage_113),
				true,
			)}
			${createTextWithPopup(
				'pv3_current',
				41,
				150,
				!config.entities.pv3_current_114 ||
					config.entities.pv3_current_114 === 'none' ||
					[1, 2].includes(mppts) ||
					!data.statePV3Current.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV3Current.toNum(1),
					1,
				)} ${UnitOfElectricalCurrent.AMPERE}`,
				(e) => Utils.handlePopup(e, config.entities.pv3_current_114),
				true,
			)}
			${createTextWithPopup(
				'pv4_voltage',
				142,
				139,
				!config.entities.pv4_voltage_115 ||
					config.entities.pv4_voltage_115 === 'none' ||
					[1, 2, 3].includes(mppts) ||
					!data.statePV4Voltage.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV4Voltage.toNum(1),
					1,
				)} ${UnitOfElectricPotential.VOLT}`,
				(e) => Utils.handlePopup(e, config.entities.pv4_voltage_115),
				true,
			)}
			${createTextWithPopup(
				'pv4_current',
				142,
				150,
				!config.entities.pv4_current_116 ||
					config.entities.pv4_current_116 === 'none' ||
					[1, 2, 3].includes(mppts) ||
					!data.statePV4Current.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV4Current.toNum(1),
					1,
				)} ${UnitOfElectricalCurrent.AMPERE}`,
				(e) => Utils.handlePopup(e, config.entities.pv4_current_116),
				true,
			)}
			${createTextWithPopup(
				'pv5_voltage',
				142,
				139,
				!config.entities.pv5_voltage ||
					config.entities.pv5_voltage === 'none' ||
					[1, 2, 3].includes(mppts) ||
					!data.statePV5Voltage.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV5Voltage.toNum(1),
					1,
				)} ${UnitOfElectricPotential.VOLT}`,
				(e) => Utils.handlePopup(e, config.entities.pv5_voltage),
				true,
			)}
			${createTextWithPopup(
				'pv5_current',
				142,
				150,
				!config.entities.pv5_current ||
					config.entities.pv5_current === 'none' ||
					[1, 2, 3].includes(mppts) ||
					!data.statePV5Current.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV5Current.toNum(1),
					1,
				)} ${UnitOfElectricalCurrent.AMPERE}`,
				(e) => Utils.handlePopup(e, config.entities.pv5_current),
				true,
			)}
			${createTextWithPopup(
				'pv6_voltage',
				142,
				139,
				!config.entities.pv6_voltage ||
					config.entities.pv6_voltage === 'none' ||
					[1, 2, 3].includes(mppts) ||
					!data.statePV6Voltage.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV6Voltage.toNum(1),
					1,
				)} ${UnitOfElectricPotential.VOLT}`,
				(e) => Utils.handlePopup(e, config.entities.pv6_voltage),
				true,
			)}
			${createTextWithPopup(
				'pv6_current',
				142,
				150,
				!config.entities.pv6_current ||
					config.entities.pv6_current === 'none' ||
					[1, 2, 3].includes(mppts) ||
					!data.statePV6Current.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV6Current.toNum(1),
					1,
				)} ${UnitOfElectricalCurrent.AMPERE}`,
				(e) => Utils.handlePopup(e, config.entities.pv6_current),
				true,
			)}
			${createTextWithPopup(
				'pv7_voltage',
				142,
				139,
				!config.entities.pv7_voltage ||
					config.entities.pv7_voltage === 'none' ||
					[1, 2, 3].includes(mppts) ||
					!data.statePV7Voltage.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV7Voltage.toNum(1),
					1,
				)} ${UnitOfElectricPotential.VOLT}`,
				(e) => Utils.handlePopup(e, config.entities.pv7_voltage),
				true,
			)}
			${createTextWithPopup(
				'pv6_current',
				142,
				150,
				!config.entities.pv7_current ||
					config.entities.pv7_current === 'none' ||
					[1, 2, 3].includes(mppts) ||
					!data.statePV7Current.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV7Current.toNum(1),
					1,
				)} ${UnitOfElectricalCurrent.AMPERE}`,
				(e) => Utils.handlePopup(e, config.entities.pv7_current),
				true,
			)}
			${createTextWithPopup(
				'pv8_voltage',
				142,
				139,
				!config.entities.pv8_voltage ||
					config.entities.pv8_voltage === 'none' ||
					[1, 2, 3].includes(mppts) ||
					!data.statePV8Voltage.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV8Voltage.toNum(1),
					1,
				)} ${UnitOfElectricPotential.VOLT}`,
				(e) => Utils.handlePopup(e, config.entities.pv8_voltage),
				true,
			)}
			${createTextWithPopup(
				'pv8_current',
				142,
				150,
				!config.entities.pv8_current ||
					config.entities.pv8_current === 'none' ||
					[1, 2, 3].includes(mppts) ||
					!data.statePV8Current.isValid(),
				'st3 left-align',
				solarColour,
				`${Utils.formatNumberLocale(
					data.statePV8Current.toNum(1),
					1,
				)} ${UnitOfElectricalCurrent.AMPERE}`,
				(e) => Utils.handlePopup(e, config.entities.pv8_current),
				true,
			)}
			${createTextWithPopup(
				'environ_temp',
				1,
				32,
				!data.stateEnvironmentTemp.isValid(),
				config.entities?.environment_temp ? 'st3 left-align' : 'st12',
				solarColour,
				`${data.stateEnvironmentTemp.toNum(1)}°`,
				(e) => Utils.handlePopup(e, config.entities.environment_temp),
				true,
			)}
		</svg>
	`;
};
