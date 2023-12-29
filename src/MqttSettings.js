import React from 'react'

const MqttSettings = () => {
	return (
		<div className='container bg-dark text-light py-5'>
			<h2 className='text-center mb-4'>Сторінка налаштувань функції MQTT</h2>
			<form className='col-md-6 mx-auto'>
				<fieldset className='border p-4'>
					<legend className='text-light'>Налаштування:</legend>
					<div className='form-check mb-3'>
						<input
							className='form-check-input'
							type='radio'
							name='MQTT'
							value='on'
							defaultChecked
						/>
						<label className='form-check-label'>Увімкнути функцію MQTT</label>
					</div>
					<div className='form-check mb-3'>
						<input
							className='form-check-input'
							type='radio'
							name='MQTT'
							value='off'
						/>
						<label className='form-check-label'>Ні</label>
					</div>
					<div className='mb-3'>
						<label htmlFor='login' className='form-label'>
							Логін:
						</label>
						<input
							type='text'
							id='login'
							name='login'
							className='form-control'
							maxLength='30'
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='pass' className='form-label'>
							Пароль:
						</label>
						<input
							type='password'
							id='pass'
							name='pass'
							className='form-control'
							maxLength='30'
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='ip_addr' className='form-label'>
							IP Адреса серверу:
						</label>
						<input
							type='text'
							id='ip_addr'
							name='ip_addr'
							className='form-control'
							minLength='7'
							maxLength='15'
							size='15'
							pattern='^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$'
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='port' className='form-label'>
							Порт серверу:
						</label>
						<input
							type='number'
							id='port'
							name='port'
							className='form-control'
							min='1'
							max='65535'
							placeholder='за замовченням 1883'
						/>
					</div>
					<button type='submit' className='btn btn-primary'>
						Застосувати
					</button>
				</fieldset>
			</form>
		</div>
	)
}

export default MqttSettings
