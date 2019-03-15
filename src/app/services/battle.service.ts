import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor() { }
  getReplay(id) {
  	return {
				"board_1": [
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "^", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "o", "~"],
						["~", "~", "~", "<", "o", ">", "~", "~", "v", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "o", "~", "~", "~", "o", "~", "~"],
						["<", "o", "o", ">", "~", "~", "~", "~", "~", "~"]
					],
				"board_2": [
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
						["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"]
					],
				"turns": [
					{
						"player": "Nicolas",
						"position": {
							"x": 0,
							"y": 3
						},
						"hit": true,
					},
					{
						"player": "Eduardo",
						"position": {
							"x": 2,
							"y": 2
						},
						"hit": false,
					},
					{
						"player": "Nicolas",
						"position": {
							"x": 4,
							"y": 9
						},
						"hit": false,
					},
					{
						"player": "Eduardo",
						"position": {
							"x": 5,
							"y": 6
						},
						"hit": true,
					}
				]
			}
  }

  getTurn(id) {
		let dados = [
					{
						"player": "Nicolas",
						"position": {
							"x": 0,
							"y": 3
						},
						"hit": true,
					},
					{
						"player": "Eduardo",
						"position": {
							"x": 2,
							"y": 2
						},
						"hit": false,
					},
					{
						"player": "Nicolas",
						"position": {
							"x": 4,
							"y": 9
						},
						"hit": false,
					},
					{
						"player": "Eduardo",
						"position": {
							"x": 5,
							"y": 6
						},
						"hit": true,
					}
				];
				return dados[id]
  }
}