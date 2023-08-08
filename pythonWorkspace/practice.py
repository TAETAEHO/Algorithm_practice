print(5)
print(-10)
print(3.14)
print(1000)
print(5+3)
print(2*8)
print(3*(3+1))

print('풍선')
print("나비")
print("ㅋ"*9)

print(5 > 10)
print(5 < 10)
print(True)
print(not True)
print(not False)
print(not (5 > 10))


# 애완동물을 소개해 주세요
animal = '강아지'
name = '연탄이'
age = 4
hobby = '산책'
is_adult = age >= 3

print("우리집 " + animal + "의 이름은 " + name + "에요")
# print(name + '는 ' + str(age) + '살')
print(name, '는', age, '살')
print(name + '는 어른일까요 ' + str(is_adult))

jumin = '990120-1234567'

print('성별 : ' + jumin[7])
print('연 : ' + jumin[0:2])  # slice
print('생년월일 : ' + jumin[:6])  # slice
print('뒤 7자리 : ' + jumin[7:])  # slice

python = 'python is amazing'

print(python.upper())
print(len(python))
print(python.replace('python', 'js'))

# 문자열 포맷
# 방법 1
print('나는 %d살입니다.' % 20)
print('나는 %s입니다.' % '파이썬')
print('나는 %c입니다.' % 'a')  # 문자 하나

# 방법 2
print('나는 {}살입니다.'.format(20))
print('나는 {0}살입니다.'.format(20))

# 방법 3
print('나는 {age}살이며 {color}색을 좋아해요'.format(age=20, color='빨강'))

# 방법 4 (v 3.6 이상부터)
age = 20
print(f'나는 {age}살입니다')

# 탈춘문자
# 줄바꿈
print('백문이 불여일견 \n백견이 불여일타')

# \" \" : 문장내에서 따옴표
print('저는 "아무개" 입니다.')
print('저는 \"아무개\" 입니다.')

# \\ : 문장 내에서 \
print('\\user\\useruser\\useruseruser')

# \r : 커서 맨 앞
print('red apple\rpine')

# \b : 백스페이스
print('redd\bapple')

# 리스트
subway = ['유재석', '박명수']
subway.insert(1, '정형돈')
print(subway)
subway.append('유재석')
print(subway)
print(subway.count('유재석'))

num_list = [5, 2, 3, 6, 1]
num_list.sort()
print(num_list)
num_list.reverse()
print(num_list)
# num_list.clear()
# print(num_list)
num_list.extend(subway)
print(num_list)

# 딕셔너리 : key-value
