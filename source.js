function check() 
{
	var TF = true;
	// 순서대로 조건 판단. 판단하는 조건에서 맞지 않을시
	// 밑의 조건함수는 실행하지 않음 
	if(TF != false)
		TF = chkId();
	if(TF != false)
		TF = chkPw();
	if(TF != false)
		TF = chkPwConfirm();
	if(TF != false)
		TF = chkNickname();
	if(TF != false)
		TF = chkEmail();
	if(TF != false)
		TF = chkCallNum();
	if(TF != false)
		TF = chkPhoneNum();
	if(TF != false)
		TF = chkSex();
	if(TF != false)
		TF = chkAddr();
	if(TF != false)
		TF = chkAddrNum();
	if(TF != false) {
		document.signUp.submit();	// 제출!
	}
}

function chkId() 			// 아이디 예외사항 체크
{
	var id = document.signUp.ID.value;				// ID 입력된 값을 받아옴
	var td = document.getElementById('inputId');	// 입력 칸 
	var specialChar = '~!@#$%^&*()_+{}\|\\:;\"\'.,/<>?'	// 특수문자
	var i,j;

	if(id=='') 					// 공백 예외처리
	{
		document.all['errorId'].innerHTML = "<warning>아이디를 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.ID.focus();		// 커서 이동
		return false;
	}
	else if((id.length<8)) 		// 길이 제한 예외처리
	{
		document.all['errorId'].innerHTML = "<warning>아이디의 길이가 너무 짧습니다.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.ID.focus();		// 커서 이동
		return false;
	}
	else if((id.length>20))		// 길이 제한 예외처리 
	{
		document.all['errorId'].innerHTML = "<warning>아이디의 길이가 너무 깁니다.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.ID.focus();		// 커서 이동
		return false;
	}
	// 특수문자 사용 판단
	for(i=0; i<id.length; i++) {			//입력된 문자 길이만큼 반복
		for(j=0; j<specialChar.length; j++) {	// 특수 문자 길이 만큼 반복
			if(id.charAt(i)==specialChar.charAt(j)) {	// 문자 개별로 특수 문자인지 판단
				document.all['errorId'].innerHTML = "<warning>아이디로 특수문자를 사용할 수 없습니다.</warning>";	// 경고문 출력
				td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
				document.signUp.ID.focus();		// 커서 이동
				return false;
			}
		}
	}
	td.setAttribute('class', 'inputItem');	// 입력칸 하이라이트 효과 제거
	document.all['errorId'].innerHTML = "";	// 경고문 제거
	return true;
}

function chkPw() 			// 비밀번호 예외사항 체크
{
	var pw = document.signUp.PW.value;				// 입력된 PW값
	var td = document.getElementById('inputPw');	// 입력 칸
	var inputAbleChar = 'abcdefghijklmnopqrstuvwxyz1234567890'	// 사용가능 문자
	var specialChar = '`~!@#$%^&*()-_=+{}\|\\:;\"\'.,/<>?'		// 특수문자
	var i,j;
	var specialCharCnt = 0;						// 특수문자 수 카운트
	var pwCnt = 0;								// PW길이 카운트

	// PW가 inputAbleChar와 specialChar로 이루어졌는지 확인
	for(i=0; i<pw.length; i++) {
		for(j=0; j<inputAbleChar.length; j++){
			if(pw.charAt(i) == inputAbleChar.charAt(j))	// 입력가능 문자일때
				pwCnt++;			// PW 길이 증가
		}
		for(j=0; j<specialChar.length; j++) {
			if(pw.charAt(i) == specialChar.charAt(j)) {	// 특수 문자일때
				pwCnt++;			// PW 길이 증가
				specialCharCnt++;	// 특수 문자 수 증가
			}
		}
	}
	if(pw=='') {			// 공백일 때
		document.all['errorPW'].innerHTML = "<warning>비밀번호를 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.PW.focus();				// 커서 이동
		return false;
	}
	else if((pw.length<8)) {	// 길이가 8 미만일때
		document.all['errorPW'].innerHTML = "<warning>비밀번호의 길이가 너무 짧습니다.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.PW.focus();				// 커서 이동
		return false;
	}
	else if((pw.length>20)) {	// 길이가 20 초과일 때
		document.all['errorPW'].innerHTML = "<warning>비밀번호의 길이가 너무 깁니다.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.PW.focus();				// 커서 이동
		return false;
	}
	else if(pwCnt != pw.length) {	// pw가 허용된 문자 외에 사용했을 때
		document.all['errorPW'].innerHTML = "<warning>비밀번호는 소문자, 특수문자로만 구성할 수 있습니다.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.PW.focus();				// 커서 이동
		return false;
	}
	else if(specialCharCnt == 0){
		document.all['errorPW'].innerHTML = "<warning>비밀번호에 특수문자가 하나 이상 들어가야합니다.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.PW.focus();				// 커서 이동
		return false;
	}
	td.setAttribute('class', 'inputItem');	// 입력칸 하이라이트 효과 제거
	document.all['errorPW'].innerHTML = "";	// 경고문 제거
	return true;
}

function chkPwConfirm() 	// 비밀번호 동일 확인 체크
{
	var pw = document.signUp.PW.value;					// password 값
	var td = document.getElementById('inputPWconfirm');	// 입력 칸
	var pwConfirm = document.signUp.PWcheck.value;		// passwordconfirm 값

	if(pw != pwConfirm) {				// 입력된 비밀번호가 다를때
		document.all['errorPWconfirm'].innerHTML = "<warning>입력된 비밀번호가 다릅니다.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.PWcheck.focus();		// 커서 이동
		return false;
	}

	td.setAttribute('class', 'inputItem');			// 입력칸 하이라이트 효과 제거
	document.all['errorPWconfirm'].innerHTML = "";	// 경고문 제거
	return true;
}

function chkNickname() 		// 닉네임 체크
{
	var nickName = document.signUp.nickName.value;		// 입력된 닉네임 값
	var td = document.getElementById('inputNick');		// 입력칸




	// 문자가 한글로 이루어 졌는지 판단.
	for(var i=0; i<nickName.length; i++) {
		var chCode = nickName.charCodeAt(i);
		if(((chCode > 0x3130 && chCode < 0x318F) || (chCode >= 0xAC00 && chCode <= 0xD7A3)))		// 한글인지 판단
			;
		else {									// 아스키 코드일때 
			document.all['errorNick'].innerHTML = "<warning>닉네임으로 한글 외에 사용이 불가합니다.</warning>";	// 경고문 출력
			td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
			document.signUp.nickName.focus();	// 커서 이동
			return false;
		}
	}
	if(nickName == '') {			// 공백일 때
		document.all['errorNick'].innerHTML = "<warning>닉네임을 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.nickName.focus();		// 커서 이동
		return false;
	}
	else if(nickName.length < 8) {	// 닉네임의 길이가 8 미만일 때
		document.all['errorNick'].innerHTML = "<warning>닉네임의 길이가 짧습니다.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.nickName.focus();		// 커서 이동
		return false;
	}
	else if(nickName.length > 20) {	// 닉네임의 길이가 20 초과일때 
		document.all['errorNick'].innerHTML = "<warning>닉네임의 길이가 깁니다.</warning>";		// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.nickName.focus();		// 커서 이동
		return false;
	}

	td.setAttribute('class', 'inputItem');		// 입력칸 하이라이트 효과 제거
	document.all['errorNick'].innerHTML = "";	// 경고문 제거
	return true;
}

function chkEmail() 		// 이메일 형식 체크
{
	var email = document.signUp.email.value;		// 입력된 이메일 값
	var td = document.getElementById('inputEmail');	// 입력 칸
	var TF = false;
	var chkform1 = false;			// @가 들어갔는지 확인
	var chkform2 = false;			// .이 들어갔는지 확인

	if(email=='') {
		document.all['errorEmail'].innerHTML = "<warning>E-mail을 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.email.focus();			// 커서 이동
		return false;
	}
	// 올바른 형식인지 판단. ~~@~~.~~ 확인
	for(var i=0; i < email.length; i++) {
		if(email.charAt(i)=='@') {
			chkform1 = true;
		}
		if(chkform1 == true && email.charAt(i)=='.') {	// @가 들어온 후 .이 들어왔는지 확인
			chkform2 = true;
		}
	}
	if(chkform2 == false) {
		document.all['errorEmail'].innerHTML = "<warning>올바른 E-mail을 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.email.focus();			// 커서 이동
		return false;
	}

	td.setAttribute('class', 'inputItem');	// 입력칸 하이라이트 효과 제거
	document.all['errorEmail'].innerHTML = "";	// 경고문 제거
	return true;
}

function chkCallNum() 		// 전화번호 체크
{
	var callNum1 = document.signUp.callNum1.value;	// 첫번째 입력된 값
	var callNum2 = document.signUp.callNum2.value;	// 두번째 입력된 값
	var callNum3 = document.signUp.callNum3.value;	// 세번째 입력된 값
	var td = document.getElementById('inputCall');	// 입력 칸

	if(callNum1=='') {		// 첫번째 입력칸 공백 판단
		document.all['errorCallNum'].innerHTML = "<warning>지역번호를 선택하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.callNum1.focus();		// 커서 이동
		return false;
	}
	else if(callNum2=='') {	// 두번째 입력칸 공백 판단
		document.all['errorCallNum'].innerHTML = "<warning>번호를 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.callNum2.focus();		// 커서이동
		return false;
	}
	else if(callNum3=='') {	// 세번째 인력칸 공백 판단
		document.all['errorCallNum'].innerHTML = "<warning>번호를 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.callNum3.focus();		// 커서 이동
		return false;
	}
	else if(callNum2.length < 3 || (callNum2.length > 4)) {
		document.all['errorCallNum'].innerHTML = "<warning>올바른 번호를 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.callNum2.focus();		// 커서 이동
		return false;
	}
	else if(callNum3.length != 4) {		// 세번째 입력값 4자리인지 판단
		document.all['errorCallNum'].innerHTML = "<warning>올바른 번호를 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.callNum3.focus();		// 커서 이동
		return false;
	}
	else if(callNum2.length >= 3 && (callNum2.length <= 4)) {	// 두번째 입력값 3~4자리인지 판단
		for(var i = 0; i < callNum2.length; i++) {
			if(callNum2.charAt(i) <'0' || callNum2.charAt(i) >'9') {	// 숫자가 입력되었는지 판단
				document.all['errorCallNum'].innerHTML = "<warning>올바른 번호를 입력하세요.</warning>";	// 경고문 출력
				td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
				document.signUp.callNum2.focus();		// 커서 이동
				return false;
			}
		}
	}
	else if(callNum3.length === 4) {		// 세번째 입력값 4자리인지 판단
		for(var i = 0; i < callNum3.length; i++) {
			if(callNum3.charAt(i) <'0' || callNum3.charAt(i) >'9'){ 	// 숫자가 입력되었는지 판단.
				document.all['errorCallNum'].innerHTML = "<warning>올바른 번호를 입력하세요.</warning>";	// 경고문 출력
				td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
				document.signUp.callNum3.focus();		// 커서 이동
				return false;
			}
		}
	}

	td.setAttribute('class', 'inputItem');	// 입력칸 하이라이트 효과 제거
	document.all['errorCallNum'].innerHTML = "";	// 경고문 제거
	return true;
}

function chkPhoneNum() 		// 휴대폰 체크
{
	var phoneNum1 = document.signUp.phoneNum1.value;	// 첫번째 입력된 값
	var phoneNum2 = document.signUp.phoneNum2.value;
	var phoneNum3 = document.signUp.phoneNum3.value;
	var td = document.getElementById('inputPhoneNum');

	if(phoneNum1=='') {			//공백 판단
		document.all['errorPhoneNum'].innerHTML = "<warning>번호를 선택하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.phoneNum1.focus();
		return false;
	}
	else if(phoneNum2=='') {	//공백 판단
		document.all['errorPhoneNum'].innerHTML = "<warning>번호를 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.phoneNum2.focus();
		return false;
	}
	else if(phoneNum3=='') {	//공백 판단
		document.all['errorPhoneNum'].innerHTML = "<warning>번호를 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.phoneNum3.focus();
		return false;
	}
	else if(phoneNum2.length < 3 || (phoneNum2.length > 4)) {
		document.all['errorPhoneNum'].innerHTML = "<warning>올바른 번호를 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.phoneNum2.focus();		// 커서 이동
		return false;
	}
	else if(phoneNum3.length != 4) {		// 세번째 입력값 4자리인지 판단
		document.all['errorPhoneNum'].innerHTML = "<warning>올바른 번호를 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.phoneNum3.focus();		// 커서 이동
		return false;
	}
	else if(phoneNum2.length >= 3 && (phoneNum2.length <= 4)) {	// 두번째 입력값 3~4자리인지 판단
		for(var i = 0; i < phoneNum2.length; i++) {
			if(phoneNum2.charAt(i) <'0' || phoneNum2.charAt(i) >'9') {	// 숫자가 입력되었는지 판단
				document.all['errorPhoneNum'].innerHTML = "<warning>올바른 번호를 입력하세요.</warning>";	// 경고문 출력
				td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
				document.signUp.phoneNum2.focus();		// 커서 이동
				return false;
			}
		}
	}
	else if(phoneNum3.length == 4) {		// 세번째 입력값 4자리인지 판단
		for(var i = 0; i < phoneNum3.length; i++) {
			if(phoneNum3.charAt(i) <'0' || phoneNum3.charAt(i) >'9'){ 	// 숫자가 입력되었는지 판단.
				document.all['errorPhoneNum'].innerHTML = "<warning>올바른 번호를 입력하세요.</warning>";	// 경고문 출력
				td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
				document.signUp.phoneNum3.focus();		// 커서 이동
				return false;
			}
		}
	}

	td.setAttribute('class', 'inputItem');		// 입력칸 하이라이트 효과 제거
	document.all['errorPhoneNum'].innerHTML = "";	// 경고문 제거
	return true;
}

function chkSex() 			// 성별 체크
{
	var sex = document.signUp.sex.value;			// 입력된 값
	var td = document.getElementById('inputSex');	// 입력 칸

	if(sex == '') {			// 성별 체크 안할 시
		document.all['errorSex'].innerHTML = "<warning>성별을 선택하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.sex.focus();
		return false;
	}

	td.setAttribute('class', 'inputItem');	// 입력칸 하이라이트 효과 제거
	document.all['errorSex'].innerHTML = "";	// 경고문 제거
	return true;
}

function chkAddr() 			// 주소 체크
{
	var address1 = document.signUp.address1.value;
	var address2 = document.signUp.address2.value;
	var td = document.getElementById('inputAddr');

	if(address1 =='') {			// 주소1 공백 체크
		document.all['errorAddr'].innerHTML = "<warning>주소를 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.address1.focus();		// 커서 이동
		return false;
	}
	else if(address2 == '') {	// 주소2(상세주소) 공백 체크
		document.all['errorAddr'].innerHTML = "<warning>주소를 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.address2.focus();		// 커서 이동
		return false;
	}

	td.setAttribute('class', 'inputItem');	// 입력칸 하이라이트 효과 제거
	document.all['errorAddr'].innerHTML = "";	// 경고문 제거
	return true;
}

function chkAddrNum() 		// 우편번호 체크
{
	var addressNum1 = document.signUp.addressNum1.value;	// 첫번째 입력된 값
	var addressNum2 = document.signUp.addressNum2.value;
	var td = document.getElementById('inputAddrNum');		// 입력 칸

	if(addressNum1 =='') {		// 우편번호 공백 체크
		document.all['errorAddrNum'].innerHTML = "<warning>우편번호를 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.addressNum1.focus();
		return false;
	}
	else if(addressNum2 == '') {	// 우편번호 공백 체크
		document.all['errorAddrNum'].innerHTML = "<warning>우편번호를 입력하세요.</warning>";	// 경고문 출력
		td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
		document.signUp.addressNum2.focus();
		return false;
	}
	for(var i = 0; i < addressNum1.length; i++) {
		if(addressNum1.charAt(i) <'0' || addressNum1.charAt(i) >'9'){ 	// 숫자가 입력되었는지 판단.
			document.all['errorAddrNum'].innerHTML = "<warning>올바른 우편번호를 입력하세요.</warning>";	// 경고문 출력
			td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
			document.signUp.addressNum1.focus();		// 커서 이동
			return false;
		}
	}
	for(var i = 0; i < addressNum2.length; i++) {
		if(addressNum2.charAt(i) <'0' || addressNum2.charAt(i) >'9'){ 	// 숫자가 입력되었는지 판단.
			document.all['errorAddrNum'].innerHTML = "<warning>올바른 우편번호를 입력하세요.</warning>";	// 경고문 출력
			td.setAttribute('class', 'highlight');	// 입력칸 하이라이트 효과
			document.signUp.addressNum2.focus();		// 커서 이동
			return false;
		}
	}

	td.setAttribute('class', 'inputItem');	// 입력칸 하이라이트 효과 제거
	document.all['errorAddrNum'].innerHTML = "";	//경고문 제거
	return true;
}
