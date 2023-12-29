import React from 'react'

const ModbusTCP = () => {
	return (
		<div className='container bg-dark text-light py-5'>
			<h2 className='text-center mb-4'>
				Сторінка налаштувань функції ModbusTCP
			</h2>
			<form className='col-md-6 mx-auto'>
				<fieldset className='border p-4'>
					<legend className='text-light'>Налаштування:</legend>
					<div className='form-check mb-3'>
						<input
							className='form-check-input'
							type='radio'
							name='ModbusTCP'
							value='on'
							defaultChecked
						/>
						<label className='form-check-label'>
							Увімкнути функцію ModbusTCP
						</label>
					</div>
					<div className='form-check mb-3'>
						<input
							className='form-check-input'
							type='radio'
							name='ModbusTCP'
							value='off'
						/>
						<label className='form-check-label'>Ні</label>
					</div>
					<br />
					<br />
					<input
						type='submit'
						className='btn btn-primary'
						value='Застосувати'
					/>
				</fieldset>
			</form>
		</div>
	)
}

export default ModbusTCP
